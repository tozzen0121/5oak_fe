import React, { useState, useEffect } from 'react';
// material-ui
import { Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';


import axios from 'utils/axios';
import { getImageUrl } from 'utils/getImageUrl';


// ==============================|| LANDING - FEATURE PAGE ||============================== //

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const GameViewPage = () => {
  const { id } = useParams();

  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchData = async (_id) => {
      try {
        const { data } = await axios.get(`/api/game/${_id}`);
        setGame(data?.data);
        console.log(data?.data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData(id);
  }, [ id ]);

  return (
    <Container maxWidth sx={{ maxWidth: '1400px' }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 15 }, pb: { md: 10, xs: 2.5 }, pt: { md: 4, xs: 2.5 } }}>

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
                    5 Oak Slots
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={12} mt={5}>
            <Grid container spacing={1} justifyContent="center" sx={{ textAlign: 'center' }}>
                <Grid item sm={12} >
                    <Grid container spacing={1} justifyContent="center" gap={8} sx={{ flexDirection: { sm: 'column', md: 'row' } }}>
                        <Grid sx={{ maxHeight: '450px', objectFit: 'fill', maxWidth: '600px', height: { sm: '100%', md: '490px' } }}>
                            <img src={`${getImageUrl(game?.imagePath)}`} alt="feature" style={{ width: '100%', height: '100%' }} />
                        </Grid>

                        <Grid flexGrow={1} display={'flex'} flexDirection={'column'} gap={2} justifyContent={'space-between'}>
                            <Grid xs={12} item gap={2} display={'flex'} flexDirection={'column'}>
                                <Typography variant="body1" sx={{ color: '#2b2b2b', whiteSpace: 'pre-wrap', fontSize: '28px', lineHeight: '28px', textAlign: 'left', fontWeight: 'bold' }}>
                                {game?.name}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#2b2b2b', whiteSpace: 'pre-wrap', fontSize: '20px', lineHeight: '20px', textAlign: 'left' }} mt={1}>
                                {game?.description}
                                </Typography>
                            </Grid>
                            <Grid display={'flex'} flexDirection={'row'} gap={2}>
                                {
                                    game?.imagesPaths?.slice(0, 3)?.map((thumb) => (
                                        <Grid sx={{ objectFit: 'fill', maxWidth: '220px', height: '160px', width: '100%' }}>
                                            <img src={`${getImageUrl(thumb)}`} alt="feature" style={{ width: '100%', height: '100%' }} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

      </Grid>
    </Container>
  );
};

export default GameViewPage;