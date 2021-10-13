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
  async getGithubInfo(user) {
    const url = `https://api.github.com/users/${user}`;
    const infoGithub = await fetch(url)
      .then((response) => response.json())
      .then((res) => res)
      .catch((error) => error);

    if (infoGithub) {
      return {
        url: infoGithub.html_url ? infoGithub.html_url : 'https://github.com/',
        avatar: infoGithub.avatar_url ? infoGithub.avatar_url : '/images/spy.svg',
        name: infoGithub.name ? infoGithub.name : '',
        followers: infoGithub.followers ? infoGithub.followers : 0,
        following: infoGithub.following ? infoGithub.following : 0,
        username: infoGithub.login ? infoGithub.login : '',
        bio: infoGithub.bio ? infoGithub.bio : '',
      };
    }
    return infoGithub.message;
  },
};

export { userService as default };
