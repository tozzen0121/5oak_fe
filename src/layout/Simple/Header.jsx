import * as React from 'react';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

// material-ui
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import {
  useMediaQuery,
  Box,
  Button,
  Chip,
  Container,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@mui/material';

// project import
import Logo from 'components/logo';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import { ThemeMode } from 'config';
import backgroundImage from 'src/assets/images/5oak/header-bg.png';

// assets
import { MenuOutlined, LineOutlined } from '@ant-design/icons';

// ==============================|| COMPONENTS - APP BAR ||============================== //

// elevation scroll
function ElevationScroll({ children, window }) {
  const theme = useTheme();
  // const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window ? window() : undefined
  });

  const backColorScroll = theme.palette.mode === ThemeMode.DARK ? theme.palette.grey[50] : theme.palette.grey[800];

  return React.cloneElement(children, {
    style: {
      // backgroundColor: trigger ? backColorScroll : 'transparent'
    }
  });
}

const Header = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerToggle, setDrawerToggle] = useState(false);

  /** Method called on multiple components with different event types */
  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <ElevationScroll>
      <AppBar
        sx={{
          bgcolor: 'transparent',
          color: theme.palette.text.primary,
          boxShadow: 'none',
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <Container disableGutters={matchDownMd} maxWidth sx={{ maxWidth: '1600px' }}>
          <Toolbar sx={{ px: { xs: 1.5, md: 0, lg: 0 }, py: 2 }}>
            <Stack direction="row" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }} alignItems="center">
              <Typography component="div" sx={{ textAlign: 'left', display: 'inline-block' }}>
                <Logo reverse to="/" />
              </Typography>
              {/* <Chip
                label={import.meta.env.VITE_APP_VERSION}
                variant="outlined"
                size="small"
                color="secondary"
                sx={{ mt: 0.5, ml: 1, fontSize: '0.725rem', height: 20, '& .MuiChip-label': { px: 0.5 } }}
              /> */}
            </Stack>
            <Stack
              direction="row"
              sx={{
                '& .header-link': { px: 1, '&:hover': { color: theme.palette.primary.main } },
                display: { xs: 'none', md: 'block' }
              }}
              spacing={8}
            >
              <Link className="header-link" color={`${ pathname?.includes('/home') ? "#fcc400": "#ffffff" }`} component={RouterLink} to="/staging/home" underline="none"
                sx={{
                  '&:hover': { color: '#fcc400 !important' }
                }}
              >
                HOME
              </Link>
              <Link className="header-link" color={`${ pathname?.includes('/games') ? "#fcc400": "#ffffff" }`} component={RouterLink} to="/staging/games" underline="none">
                GAMES
              </Link>
              <Link className="header-link" color={`${ pathname?.includes('/team') ? "#fcc400": "#ffffff" }`} component={RouterLink} to="/staging/team" underline="none">
                TEAM
              </Link>
              <Link className="header-link" color={`${ pathname?.includes('/news') ? "#fcc400": "#ffffff" }`} component={RouterLink} to="/staging/news" underline="none">
                NEWS
              </Link>
              <Link className="header-link" color={`${ pathname?.includes('/careers') ? "#fcc400": "#ffffff" }`} component={RouterLink} to="/staging/careers" underline="none">
                CAREERS
              </Link>
              <Link className="header-link" color={`${ pathname?.includes('/contact') ? "#fcc400": "#ffffff" }`} component={RouterLink} to="/staging/contact" underline="none">
                CONTACT
              </Link>
            </Stack>
            <Box
              sx={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <Typography component="div" sx={{ textAlign: 'left', display: 'inline-block' }}>
                <Logo reverse to="/" />
              </Typography>
              <Stack direction="row" spacing={2}>
                {/* <Button
                  variant="outlined"
                  size="small"
                  color="warning"
                  component={RouterLink}
                  to="/components-overview/buttons"
                  sx={{ mt: 0.5, height: 28 }}
                >
                  All Components
                </Button> */}

                <IconButton
                  color="secondary"
                  onClick={drawerToggler(true)}
                  sx={{
                    '&:hover': { bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.lighter' : 'secondary.dark' }
                  }}
                >
                  <MenuOutlined style={{ color: theme.palette.mode === ThemeMode.DARK ? 'inherit' : theme.palette.grey[100] }} />
                </IconButton>
              </Stack>
              <Drawer
                anchor="top"
                open={drawerToggle}
                onClose={drawerToggler(false)}
                sx={{ '& .MuiDrawer-paper': { backgroundImage: 'none' } }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    '& .MuiListItemIcon-root': {
                      fontSize: '1rem',
                      minWidth: 28
                    }
                  }}
                  role="presentation"
                  onClick={drawerToggler(false)}
                  onKeyDown={drawerToggler(false)}
                >
                  <List>

                    <Link style={{ textDecoration: 'none' }} href="/staging/home" >
                      <ListItemButton component="span" >
                        <ListItemText primary="HOME" primaryTypographyProps={{ variant: 'h6', color: (pathname?.includes('/home') ? "#fcc400": "#000000") }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="/staging/games" >
                      <ListItemButton component="span">
                        <ListItemText primary="GAMES" primaryTypographyProps={{ variant: 'h6', color: (pathname?.includes('/games') ? "#fcc400": "#000000") }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="/staging/team" >
                      <ListItemButton component="span">
                        <ListItemText primary="TEAM" primaryTypographyProps={{ variant: 'h6', color: (pathname?.includes('/team') ? "#fcc400": "#000000") }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="/staging/news" >
                      <ListItemButton component="span">
                        <ListItemText primary="NEWS" primaryTypographyProps={{ variant: 'h6', color: (pathname?.includes('/news') ? "#fcc400": "#000000") }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="/staging/careers" >
                      <ListItemButton component="span">
                        <ListItemText primary="CAREERS" primaryTypographyProps={{ variant: 'h6', color: (pathname?.includes('/careers') ? "#fcc400": "#000000") }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="/staging/contact" >
                      <ListItemButton component="span">
                        <ListItemText primary="CONTACT" primaryTypographyProps={{ variant: 'h6', color: (pathname?.includes('/contact') ? "#fcc400": "#000000") }} />
                      </ListItemButton>
                    </Link>

                  </List>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
