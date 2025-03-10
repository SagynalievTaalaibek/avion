import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import {
  GlobalError,
  LoginMutation,
  RegisterMutation,
  RegisterResponse,
  ValidationError,
} from '../../types';
import axiosApi from '../../axiosApi';
import { RootState } from '../../app/store/store';
import { unsetUser } from './usersSlice';

export const register = createAsyncThunk<
  RegisterResponse,
  RegisterMutation,
  { rejectValue: ValidationError }
>('user/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await axiosApi.post('/users', userData);
    return response.data;
  } catch (e) {
    if (isAxiosError(e) && e.response && e.response.status === 422) {
      return rejectWithValue(e.response.data);
    }

    throw e;
  }
});

export const login = createAsyncThunk<
  RegisterResponse,
  LoginMutation,
  { rejectValue: GlobalError }
>('users/login', async (loginMutation, { rejectWithValue }) => {
  try {
    const response = await axiosApi.post<RegisterResponse>(
      '/users/sessions',
      loginMutation,
    );

    return response.data;
  } catch (e) {
    if (isAxiosError(e) && e.response && e.response.status === 422) {
      return rejectWithValue(e.response.data);
    }

    throw e;
  }
});

export const logout = createAsyncThunk<void, undefined, { state: RootState }>(
  'users/logout',
  async (_, { getState, dispatch }) => {
    const token = getState().users.user?.token;

    await axiosApi.delete('/users/sessions', {
      headers: { Authorization: 'Bearer ' + token },
    });

    dispatch(unsetUser());
  },
);
