import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { login } from './usersThunks';
import { selectLoginError, selectLoginLoading } from './usersSlice';
import {
  Alert,
  Avatar,
  Box,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LoginIcon from '@mui/icons-material/Login';
import { LoadingButton } from '@mui/lab';
import { LoginMutation } from '../../types';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loginLoading = useAppSelector(selectLoginLoading);
  const error = useAppSelector(selectLoginError);
  const [state, setState] = useState<LoginMutation>({
    email: '',
    password: '',
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitFormHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    await dispatch(login(state)).unwrap();
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mt: 3, width: '100%' }}>
            {error.error}
          </Alert>
        )}
        <Box component="form" onSubmit={submitFormHandler} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                autoComplete="current-username"
                value={state.email}
                onChange={inputChangeHandler}
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={state.password}
                onChange={inputChangeHandler}
                sx={{ width: '100%' }}
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            disabled={loginLoading}
            loading={loginLoading}
            loadingPosition="start"
            startIcon={<LoginIcon />}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/register" variant="body2">
                Or sing up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
