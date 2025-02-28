import React, { useState, useEffect } from 'react';
// material-ui
import { Container, Grid, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';
import { motion } from 'framer-motion';


import axios from 'utils/axios';
import { getImageUrl } from 'utils/getImageUrl';


// ==============================|| LANDING - FEATURE PAGE ||============================== //

const GamesPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/game');
        setGames(data?.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container maxWidth sx={{ maxWidth: '1600px' }}>
      <Grid container alignItems="baseline" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 15 }, pb: { md: 10, xs: 2.5 }, pt: 5 }}>
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="center" sx={{ textAlign: 'center' }}>
            <Grid item sm={12} >
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      mb: 2,
                      fontSize: '35px',
                      fontWeight: 500,
                      lineHeight: '40px',
                      color: '#013f34',
                    }}
                  >
                    5 OAK Games
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {
          games?.map((game, index) => (
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
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <img src={`${getImageUrl(game?.imagePath)}`} alt="feature" style={{ maxWidth: '365px', maxHeight: '250px', height: '250px', objectFit: 'cover', width: '100%' }} />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1" sx={{ color: '#2b2b2b', whiteSpace: 'pre-wrap', fontSize: '25px', lineHeight: '25px', textAlign: 'center' }}>
                          {game?.name}
                        </Typography>
                      </Grid>
                      {/* <Grid item xs={12}>
                        <Typography variant="body1" sx={{ color: '#2b2b2b', whiteSpace: 'pre-wrap', fontSize: '20px', lineHeight: '20px', textAlign: 'center' }}>
                          {game?.description}
                        </Typography>
                      </Grid> */}
                    </Grid>
                  </MainCard>
                </motion.div>
              </RouterLink>
            </Grid>
          ))
        }

      </Grid>
    </Container>
  );
};

export default GamesPage;