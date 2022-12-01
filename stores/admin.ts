import { clientAPI } from "../composables/backend";

export const useAuthStore = defineStore("auth", () => {
  const isAdmin = ref(false);
  const token = ref("");
  const getToken = async (login: string, password: string): Promise<string> => {
    try {
      const result = await clientAPI.postApi("Login", {
        username: login,
        password,
      });

      token.value = result.token;
      isAdmin.value = true;
      process.client && window.localStorage.setItem("blog-api", result.token);
      return "";
    } catch (e) {
      console.log(e);
      return "Auth error";
    }
  };
  return { getToken, isAdmin, token };
});

export const useAdminStore = defineStore("admin", () => {
  const config = ref<configType | null>(null);
  const getConfig = async () => {
    const result = await clientAPI.getApi("config");
    config.value = result;
  };
  const setConfig = async (params: configType) => {
    await clientAPI.postApi("admin/sconfig", params, true);
  };
  return { config, getConfig, setConfig };
});
