import { setCookie, destroyCookie } from 'nookies';
import isStagingEnv from '../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        return respostaDoServidor.json();
      }

      throw new Error('Erro ao autenticar');
    });
}

const BASE_URL = isStagingEnv
  // Back End de DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // Back End de PROD
  : 'https://instalura-api-git-master-omariosouto.vercel.app';
  // : 'https://instalura-api.omariosouto.vercel.app';

const loginService = {
  async login({ username, password },
    HttpClienteModule = HttpClient) {
    return HttpClienteModule(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((respostaConvertida) => {
        const { token } = respostaConvertida.data;
        const DAY_IN_SECONDS = 86400;
        // Salvar o Token
        setCookie(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });
        return {
          token,
        };
      });
  },
  logout() {
    destroyCookie(null, 'APP_TOKEN');
  },
};

export { loginService as default };
