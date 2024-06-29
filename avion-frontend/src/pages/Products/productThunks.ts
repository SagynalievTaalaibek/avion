import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductI, ProductMutation } from '../../types';
import axiosApi from '../../axiosApi';

export const createProduct = createAsyncThunk<void, ProductMutation>(
  'product/createProduct',
  async (product) => {
    await axiosApi.post('/products', product);
  },
);

export const fetchProducts = createAsyncThunk<ProductI[], string>(
  'product/fetchProducts',
  async (query) => {
    if (query) {
      const response = await axiosApi.get(`/products?category=${query}`);
      return response.data;
    } else {
      const response = await axiosApi.get(`/products`);
      return response.data;
    }
  },
);

export const fetchOneProduct = createAsyncThunk<ProductI, string>(
  'product/fetchOneProduct',
  async (id) => {
    const response = await axiosApi.get(`/products/${id}`);
    return response.data;
  },
);
