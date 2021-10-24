import authService from '../auth/authService';
import HttpClient from '../../infra/http/HttpClient';
import isStagingEnv from '../../infra/env/isStagingEnv';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api.vercel.app'
  : 'https://instalura-api.vercel.app';

const postService = {
  async postPhoto(data) {
    const url = `${BASE_URL}/api/posts`;
    try {
      const token = await authService().getToken();
      const response = await HttpClient(url, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      });

      if (response.data) {
        return response.data;
      }
      return undefined;
    } catch (err) {
      return undefined;
    }
  },
};

export { postService as default };
