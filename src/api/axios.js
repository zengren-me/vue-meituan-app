import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://open.duyiedu.com',
  params: {
    appkey: 'zr1234_1645779600263',
  },
});

instance.interceptors.response.use((resp) => resp.data);

export default instance;
