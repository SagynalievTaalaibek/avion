import { CssBaseline } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const BaseLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Box
          component={'main'}
          sx={{
            flexGrow: 1,
          }}
        >
          {children}
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
