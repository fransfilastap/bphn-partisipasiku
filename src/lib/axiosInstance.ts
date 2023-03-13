import Axios from 'axios';
import { STRAPI_API_TOKEN, STRAPI_REST_API_ENDPOINT } from '@/configs/env';

const axiosInstance = Axios.create({
  baseURL: `${STRAPI_REST_API_ENDPOINT}`,
  headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
