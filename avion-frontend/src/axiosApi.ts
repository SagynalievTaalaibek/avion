import axios from 'axios';
import { Store } from '@reduxjs/toolkit';
import { apiURL } from './app/constants/links';
import { RootState } from './app/store/store';

const axiosApi = axios.create({
  baseURL: apiURL,
});

export const addInterceptors = (store: Store<RootState>) => {
  axiosApi.interceptors.request.use((config) => {
    const token = store.getState().users.user?.token;

    config.headers.set('Authorization', token ? 'Bearer ' + token : undefined);

    return config;
  });
};

export default axiosApi;
