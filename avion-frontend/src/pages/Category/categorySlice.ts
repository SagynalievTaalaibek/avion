import { createSlice } from '@reduxjs/toolkit';
import { CategoryI } from '../../types';
import { fetchAllCategory } from './categoryThunks';
import { RootState } from '../../app/store/store';

export interface ICategoryState {
  category: CategoryI[];
  fetching: boolean;
}

const initialState: ICategoryState = {
  category: [],
  fetching: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategory.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchAllCategory.fulfilled, (state, { payload }) => {
        state.category = payload;
        state.fetching = false;
      })
      .addCase(fetchAllCategory.rejected, (state) => {
        state.fetching = false;
      });
  },
});

export const categoryReducer = categorySlice.reducer;
export const selectCategory = (state: RootState) => state.categories.category;
export const selectCategoryFetching = (state: RootState) =>
  state.categories.fetching;
