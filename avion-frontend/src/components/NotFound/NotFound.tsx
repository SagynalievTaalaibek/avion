import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold' }} gutterBottom>
        404 - Страница не найдена
      </Typography>
      <Typography variant="h5">
        Страница, которую вы ищете, не существует.
      </Typography>
      <Typography
        component={Link}
        to={'/'}
        variant="h5"
        sx={{ textDecoration: 'none', marginTop: '20px', color: 'blue' }}
      >
        Вернуться на главную
      </Typography>
    </Box>
  );
};

export default NotFound;
