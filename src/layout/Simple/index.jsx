import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

// project import
import Loader from 'components/Loader';
import { SimpleLayoutType } from 'config';

const Header = lazy(() => import('./Header'));
const FooterBlock = lazy(() => import('./FooterBlock'));
const Footer = lazy(() => import('./Footer'));

import backgroundImage from 'src/assets/images/5oak/background.jpeg';

// ==============================|| LAYOUT - SIMPLE / LANDING ||============================== //

const SimpleLayout = ({ layout = SimpleLayoutType.SIMPLE }) => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Box sx={{ minHeight: 'calc(100vh - 105px - 98px)', backgroundImage: `url(${backgroundImage})`, marginTop: '-15px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Outlet />
      </Box>
      {/* <FooterBlock isFull={layout === SimpleLayoutType.LANDING} /> */}
      <Footer />
    </Suspense>
  );
};

SimpleLayout.propTypes = {
  layout: PropTypes.string
};

export default SimpleLayout;
