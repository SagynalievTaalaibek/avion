import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ProductMutation } from '../../types';
import MenuItem from '@mui/material/MenuItem';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { selectCategory } from '../Category/categorySlice';
import { fetchAllCategory } from '../Category/categoryThunks';
import { createProduct } from '../Products/productThunks';
import { useNavigate } from 'react-router-dom';

const initialState: ProductMutation = {
  image: '',
  price: '',
  description: '',
  title: '',
  height: '',
  depth: '',
  quantity: '',
  width: '',
  categoryId: '',
};

const ProductForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const categories = useAppSelector(selectCategory);
  const isLoading = false;
  const [state, setState] = useState<ProductMutation>(initialState);

  useEffect(() => {
    dispatch(fetchAllCategory());
  }, [dispatch]);

  const onItemSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(createProduct(state));
    setState(initialState);
    navigate('/profile');
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const selectChangeHandler = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth={'xl'} sx={{ mb: 3 }}>
      <Typography
        sx={{ margin: '30px 0', fontWeight: 'bold', fontSize: '40px' }}
      >
        Product
      </Typography>
      <form autoComplete="off" onSubmit={onItemSubmit}>
        <Grid container direction="column" spacing={2} sx={{ maxWidth: '60%' }}>
          <Grid item xs>
            <TextField
              label="Title"
              required
              id="title"
              name="title"
              value={state.title}
              onChange={inputChangeHandler}
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs>
            <TextField
              label="Price"
              required
              id="price"
              type="number"
              name="price"
              value={state.price}
              onChange={inputChangeHandler}
              error={parseFloat(state.price) < 0}
              helperText={
                parseFloat(state.price) < 0 ? 'Price must be > 0' : ''
              }
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs>
            <TextField
              multiline
              rows={3}
              required
              label="Description"
              name="description"
              id="description"
              value={state.description}
              onChange={inputChangeHandler}
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs>
            <FormControl fullWidth>
              <InputLabel id="category">Category</InputLabel>
              <Select
                id="categoryId"
                required
                labelId="category"
                value={state.categoryId}
                name="categoryId"
                label="Category *"
                onChange={selectChangeHandler}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {categories.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs>
            <TextField
              required
              label="Image"
              name="image"
              id="image"
              value={state.image}
              onChange={inputChangeHandler}
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs>
            <TextField
              label="Height"
              required
              id="height"
              type="number"
              name="height"
              value={state.height}
              onChange={inputChangeHandler}
              error={parseFloat(state.height) < 0}
              helperText={
                parseFloat(state.height) < 0 ? 'Height must be > 0' : ''
              }
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs>
            <TextField
              label="Depth"
              required
              id="depth"
              type="number"
              name="depth"
              value={state.depth}
              onChange={inputChangeHandler}
              error={parseFloat(state.depth) < 0}
              helperText={
                parseFloat(state.depth) < 0 ? 'Depth must be > 0' : ''
              }
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs>
            <TextField
              label="Quantity"
              required
              id="quantity"
              type="number"
              name="quantity"
              value={state.quantity}
              onChange={inputChangeHandler}
              error={parseFloat(state.quantity) < 0}
              helperText={
                parseFloat(state.quantity) < 0 ? 'Quantity must be > 0' : ''
              }
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs>
            <TextField
              label="Width"
              required
              id="width"
              type="number"
              name="width"
              value={state.width}
              onChange={inputChangeHandler}
              error={parseFloat(state.width) < 0}
              helperText={
                parseFloat(state.width) < 0 ? 'Width must be > 0' : ''
              }
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs>
            <LoadingButton
              type="submit"
              color="primary"
              variant="contained"
              loading={isLoading}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              sx={{ mt: 1 }}
            >
              Create item
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ProductForm;
