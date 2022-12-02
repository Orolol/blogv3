const BASE_PATH = 'http://localhost:3010/';

export const clientAPI = {
  getApi: async (
    path: string,
    payload?: any,
    auth: boolean = false,
    params?: any
  ) => {
    const token = useAuthStore().token;

    const request = fetch(BASE_PATH + path, {
      method: 'get',
      headers: !auth
        ? {
            'Content-Type': 'application/json',
          }
        : {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
    });
    return await requestSender(request);
  },
  postApi: async (path: string, payload?: any, auth: boolean = false) => {
    const token = useAuthStore().token;

    const request = fetch(BASE_PATH + path, {
      method: 'POST',
      headers: !auth
        ? {
            'Content-Type': 'application/json',
          }
        : {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
      body: JSON.stringify(payload),
    });
    const data = await requestSender(request);
    return data;
  },
};

const requestSender = async (promise: Promise<any>) => {
  try {
    const response: Response = await promise;

    return await response
      .json()
      .then((data) => {
        if (response.status !== 200) {
          throw new Error(data.status);
        }
        return data;
      })
      .catch(() => {
        if (!response.ok) {
          console.log(response.status);
          if ([401, 403].includes(response.status)) {
            const error = new Error('Authentification error');
            useAuthStore().setToken('');
            return Promise.reject(error);
          } else {
            const error = new Error('Generic error');
            return Promise.reject(error);
          }
        }
      });
  } catch (e) {
    console.log(e);
  }
};
