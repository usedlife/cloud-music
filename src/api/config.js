import axios from 'axios';

export const baseUrl = 'http';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.error(err, '接口请求错误');
  },
)

export default axiosInstance; 