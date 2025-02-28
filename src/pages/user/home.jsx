import React, { useState, useEffect } from 'react';
// material-ui
import { Container, Grid, Typography, Button, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';
import { motion } from 'framer-motion';


import axios from 'utils/axios';
import { getImageUrl } from 'utils/getImageUrl';
import homeTopLogo from 'assets/images/5oak/logo-black.png';


// ==============================|| LANDING - FEATURE PAGE ||============================== //

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [home, setHome] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/game');
        setGames(data?.data);
        const response = await axios.get('/api/home');
        setHome(response.data?.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container maxWidth sx={{ maxWidth: '1600px' }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 15 }, pb: { md: 10, xs: 2.5 }, pt: 5 }}>
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
            <Grid item sm={12} >
              <Grid container spacing={1} justifyContent="center">

                <Grid item xs={12} justifyContent={'center'} container>
                  {/* <Typography
                    sx={{
                      mb: 2,
                      fontSize: '76px',
                      fontWeight: 700,
                      lineHeight: '90px',
                      background: 'linear-gradient(90deg, #3f4e25, #4c6231, #4b702b, #798f46, #3f4e25)',
                      '-webkit-background-clip': 'text',
                      '-webkit-text-fill-color': 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                      width: 'fit-content',
                    }}
                  >
                    5OAK GAMES
                  </Typography> */}
                  <CardMedia component="img" image={homeTopLogo} sx={{ width: 'auto' }} />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ color: '#003732', whiteSpace: 'pre-wrap', fontSize: '28px', lineHeight: '35px', minHeight: 100 }}>
                    {home?.content}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {
          games?.slice(0, 4)?.map((game, index) => (
            <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
              <RouterLink to={`/staging/games/${game?._id}`} style={{ textDecoration: 'none' }}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30
                  }}
                >
                  <MainCard contentSX={{ p: 3 }} sx={{ border: 'none', backgroundColor: 'transparent' }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <img src={`${getImageUrl(game?.imagePath)}`} alt="feature" style={{ maxWidth: '365px', maxHeight: '250px', height: '250px', objectFit: 'cover', width: '100%' }} />
                      </Grid>
                      {/* <Grid item xs={12}>
                        <Typography variant="body1" sx={{ color: '#2b2b2b', whiteSpace: 'pre-wrap', fontSize: '25px', lineHeight: '25px', textAlign: 'center' }}>
                          {game?.name}
                        </Typography>
                      </Grid> */}
                    </Grid>
                  </MainCard>
                </motion.div>
              </RouterLink>
            </Grid>
          ))
        }

        <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
          <RouterLink to={'/staging/games'}>
            <Button 
              variant="outlined" 
              color="secondary" 
              sx={{ 
                borderWidth: '8px', 
                borderRadius: '100px', 
                paddingTop: '20px', 
                paddingBottom: '20px', 
                fontSize: '25px', 
                paddingLeft: '80px', 
                paddingRight: '80px', 
                '&:hover': {
                  borderWidth: '8px',
                }
              }}>MORE GAMES</Button>
          </RouterLink>
        </Grid>

      </Grid>
    </Container>
  );
};

export default HomePage;
