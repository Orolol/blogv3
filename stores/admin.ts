import { clientAPI } from '../composables/backend';

export const useAuthStore = defineStore('counter', () => {
  const isAdmin = ref(false);
  const token = ref('');
  //   const doubleCount = computed(() => count.value * 2)
  const getToken = async (login: string, password: string): string => {
    try {
      const result = await clientAPI.postApi('Login', {
        username: login,
        password,
      });
      console.log(result);
      token.value = result.token;
      return '';
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  return { getToken, isAdmin, token };
});
