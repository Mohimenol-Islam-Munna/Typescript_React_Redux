import axios from 'axios';

interface AxiosOptions {
  url: string;
  method: string;
  headers?: object;
  params?: object;
}

export const thunkActionHandler = async (options: AxiosOptions) => {
  const res = await axios(options);
  return res.data;
};
