import { createSlice } from '@reduxjs/toolkit';
import { ProductI } from '../../types';
import { createProduct, fetchOneProduct, fetchProducts } from './productThunks';
import { RootState } from '../../app/store/store';

export interface ProductState {
  products: ProductI[];
  oneProduct: ProductI | null;
  fetching: boolean;
  creating: boolean;
}

const initialState: ProductState = {
  products: [],
  oneProduct: null,
  fetching: false,
  creating: false,
} as ProductState;

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.creating = true;
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.creating = false;
      })
      .addCase(createProduct.rejected, (state) => {
        state.creating = false;
      });

    builder
      .addCase(fetchProducts.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.fetching = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.fetching = false;
      });

    builder
      .addCase(fetchOneProduct.pending, (state) => {
        state.fetching = true;
      })
      .addCase(fetchOneProduct.fulfilled, (state, { payload }) => {
        state.oneProduct = payload;
        state.fetching = false;
      })
      .addCase(fetchOneProduct.rejected, (state) => {
        state.fetching = false;
      });
  },
});

export const productReducer = productSlice.reducer;
export const selectProducts = (state: RootState) => state.products.products;
export const selectProductsFetching = (state: RootState) =>
  state.products.fetching;
export const selectProductsCreating = (state: RootState) =>
  state.products.creating;
export const selectOneProduct = (state: RootState) => state.products.oneProduct;
