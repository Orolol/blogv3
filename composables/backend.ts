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
      headers: auth
        ? {
            'Content-Type': 'application/json',
          }
        : {
            'Content-Type': 'application/json',
            Bearer: token,
          },
    });
    return await requestSender(request);
  },
  postApi: async (path: string, payload?: any, auth: boolean = false) => {
    const token = useAuthStore().token;

    const request = fetch(BASE_PATH + path, {
      method: 'POST',
      headers: auth
        ? {
            'Content-Type': 'application/json',
          }
        : {
            'Content-Type': 'application/json',
            Bearer: token,
          },
      body: JSON.stringify(payload),
    });
    return await requestSender(request);
  },
};

const requestSender = async (promise: Promise<any>) => {
  const response: Response = await promise;
  const { data, errors } = await response.json();
  if (response.ok) {
    return data;
  } else {
    console.log(response.status);
    if ([401, 403].includes(response.status)) {
      const error = new Error('Authentification error');
      return Promise.reject(error);
    } else {
      console.log(3);
      const error = new Error(
        errors?.map((e: { message: string }) => e.message).join('\n') ??
          'unknown'
      );
      return Promise.reject(error);
    }
  }
};
