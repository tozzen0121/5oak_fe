import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, Container, CardMedia, Divider, Grid, Link, Stack, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// project import
import useConfig from 'hooks/useConfig';
import { ThemeDirection, ThemeMode } from 'config';
import { getImageUrl, ImagePath } from 'utils/getImageUrl';

// assets
import { SendOutlined } from '@ant-design/icons';

import imgfooterlogo from 'assets/images/5oak/logo-sm.png';
import imgfootercopyright from 'assets/images/5oak/footer_copyright.png';
import imgfootersoc1 from 'assets/images/landing/img-soc1.svg';
import imgfootersoc2 from 'assets/images/landing/img-soc2.svg';
import imgfootersoc3 from 'assets/images/landing/img-soc3.svg';
import AnimateButton from 'components/@extended/AnimateButton';

// link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  },
  '&:active': {
    color: theme.palette.primary.main
  }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const Footer = ({ isFull }) => {
  const theme = useTheme();
  const { presetColor } = useConfig();
  const textColor = theme.palette.mode === ThemeMode.DARK ? 'text.primary' : 'background.paper';

  const linkSX = {
    color: theme.palette.common.white,
    fontSize: '0.875rem',
    fontWeight: 400,
    opacity: '0.6',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1'
    }
  };

  const frameworks = [
    { title: 'CodeIgniter', link: 'https://links.codedthemes.com/dEGKs' },
    {
      title: 'React MUI',
      link: 'https://links.codedthemes.com/Aprwb'
    },
    {
      title: 'Angular',
      link: 'https://links.codedthemes.com/EIvof'
    },
    {
      title: 'Bootstrap 5',
      link: 'https://links.codedthemes.com/IbYiI'
    },
    {
      title: '.Net',
      link: 'https://links.codedthemes.com/GPZhD'
    }
  ];

  return (
    <>
      <Box sx={{ pt: isFull ? 0 : 3, pb: 3, bgcolor: theme.palette.grey.A700 }}>
        <Container maxWidth sx={{ maxWidth: '1600px' }}>
          <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                  <Grid >
                    <CardMedia component="img" image={imgfooterlogo} sx={{ width: 'auto' }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400, color: theme.palette.common.white }}>
                    COPYRIGHT © 2024. All rights reserved to 5OakGames - Any and all content included on this website or incorporated by reference is protected by international copyright laws
                    </Typography>
                  </Grid>
                </Container>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4} container={false}>
              <Stack item xs={12} container spacing={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                {/* <Grid item md={8}>
                  <CardMedia component="img" image={imgfootercopyright} />
                </Grid>
                <Grid sx={{ marginTop: 0 }} >
                  <Typography sx={{ fontWeight: 400, color: theme.palette.common.white }}>
                    GAMBLING
                  </Typography>
                  <Typography sx={{ fontWeight: 400, color: theme.palette.common.white }}>
                    COMMISION
                  </Typography>
                </Grid> */}
              </Stack>
              <Grid item xs={12}>
                <Stack sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row', gap: 5 }}>
                  <FooterLink
                    href=""
                    target="_blank"
                    underline="none"
                    sx={{ color: theme.palette.common.white }}
                  >
                    PRIVACY POLICY
                  </FooterLink>
                  <FooterLink
                    href=""
                    target="_blank"
                    underline="none"
                    sx={{ color: theme.palette.common.white }}
                  >
                    TERMS AND CONDITIONS
                  </FooterLink>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Footer.propTypes = {
  isFull: PropTypes.bool
};

export default Footer;
