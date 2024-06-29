import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/store/hooks';
import { selectUser } from '../users/usersSlice';

const Profile = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl">
      <Typography
        component="h1"
        variant="h5"
        sx={{ margin: '20px 0', fontWeight: 'bold' }}
      >
        Full Name: {user?.full_name}
      </Typography>
      <Typography
        component="h1"
        variant="h5"
        sx={{ margin: '20px 0', fontWeight: 'bold' }}
      >
        Email: {user?.email}
      </Typography>
      <Typography
        component="h1"
        variant="h5"
        sx={{ margin: '20px 0', fontWeight: 'bold' }}
      >
        Phone: {user?.phone}
      </Typography>
      <Button variant={'contained'} onClick={() => navigate('/create-product')}>
        Create Product
      </Button>
    </Container>
  );
};

export default Profile;
