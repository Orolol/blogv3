import { clientAPI } from '../composables/backend';

export const useAuthStore = defineStore('auth', () => {
  const isAdmin = ref(false);
  const token = ref('');
  const setToken = (tok: string) => {
    token.value = tok;
    process.client && window.localStorage.setItem('blog-api', tok);
  };
  const getToken = async (login: string, password: string): Promise<string> => {
    try {
      const result = await clientAPI.postApi('Login', {
        username: login,
        password,
      });

      setToken(result.token);
      isAdmin.value = true;
      return '';
    } catch (e) {
      console.log(e);
      return 'Auth error';
    }
  };
  return { getToken, isAdmin, token, setToken };
});

export const useAdminStore = defineStore('admin', () => {
  // CONFING #######
  const config = ref<configType | null>(null);
  const getConfig = async () => {
    const result = await clientAPI.getApi('config');
    config.value = result;
  };
  const setConfig = async (params: configType) => {
    await clientAPI.postApi('admin/sconfig', params, true);
  };

  // POSTS #######
  const posts = ref<Array<postType>>([]);
  const fetchPosts = async () => {
    const result = await clientAPI.postApi('admin/aposts', null, true);
    posts.value = result;
  };

  return { config, getConfig, setConfig, posts, fetchPosts };
});
