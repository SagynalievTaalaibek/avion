import { createAsyncThunk } from '@reduxjs/toolkit';
import { CategoryI } from '../../types';
import axiosApi from '../../axiosApi';

export const fetchAllCategory = createAsyncThunk<CategoryI[], undefined>(
  'category/fetchAll',
  async () => {
    const response = await axiosApi.get<CategoryI[]>('/categories');
    return response.data;
  },
);
