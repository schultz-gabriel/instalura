import isStagingEnv from '../../infra/env/isStagingEnv';
import HttpClient from '../../infra/http/HttpClient';
import authService from '../auth/authService';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api.vercel.app/'
  : 'https://instalura-api.vercel.app/';

const userService = {
  async getProfilePage(ctx) {
    const url = `${BASE_URL}/api/users/posts`;
    console.log(url);
    try {
      const token = await authService(ctx).getToken();
      const response = await HttpClient(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return {
        user: {
          totalLikes: 100,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          followers: 2000,
          following: 100,
        },
        posts: response.data,
      };
    } catch (err) {
      throw new Error('Não conseguimos pegar os posts');
    }
  },
};

export { userService as default };
