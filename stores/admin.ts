export const useAuthStore = defineStore("counter", () => {
  const isAdmin = ref(false);
  const token = ref("");
  //   const doubleCount = computed(() => count.value * 2)
  const getToken = async (login: string, password: string) => {
    const result = await fetch("http://localhost:3010/Login", {
      method: "POST",
      body: JSON.stringify({
        Username: login,
        Password: password,
      }),
    });
    const json = await result.json();

    token.value = json.token;
  };

  return { getToken, isAdmin, token };
});
