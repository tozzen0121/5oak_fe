import React, { useState, useEffect } from 'react';
// material-ui
import { Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';
import { motion } from 'framer-motion';

import axios from 'utils/axios';
import { getImageUrl } from 'utils/getImageUrl';


// ==============================|| LANDING - FEATURE PAGE ||============================== //

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/news');
        setNews(data?.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container maxWidth sx={{ maxWidth: '1600px' }}>
      <Grid container alignItems="flex-start" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 15 }, pb: { md: 10, xs: 2.5 }, pt: { md: 4, xs: 2.5 } }}>
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
                    Latest News
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {
          news?.map((n, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30
                  }}
                >
                <MainCard contentSX={{ p: 1 }} sx={{ border: 'none', backgroundColor: 'transparent' }}>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <img src={`${getImageUrl(n?.imagePath)}`} alt="feature" style={{ maxWidth: '500px', maxHeight: '150px', height: '150px', objectFit: 'cover', width: '100%' }} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1" sx={{ color: '#2b2b2b', whiteSpace: 'pre-wrap', fontSize: '28px', lineHeight: '28px', textAlign: 'left', fontWeight: 'bold' }}>
                        {n?.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1" sx={{ color: '#2b2b2b', whiteSpace: 'pre-wrap', fontSize: '20px', lineHeight: '20px', textAlign: 'left' }} mt={1}>
                        {`${n?.description.slice(0, 100)} ...`}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} mt={1} container justifyContent={'space-between'}>
                      <Link className="header-link"  component={RouterLink} to={`/staging/news/${n?._id}`} sx={{ fontSize: '20px', textDecoration: 'underline', textAlign: 'left' }} >
                          {`read more →`}
                      </Link>
                      <Typography variant="body1" sx={{ color: '#2b2b2b', whiteSpace: 'pre-wrap', fontSize: '20px', lineHeight: '20px', textAlign: 'left' }} mt={1}>
                        {(new Date(n?.created_at)).toLocaleDateString('en-GB', options)}
                      </Typography>
                    </Grid>
                  </Grid>
                </MainCard>
              </motion.div>
            </Grid>
          ))
        }
        {
          news?.length === 0 && 
          <Grid item xs={12}  >
            <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Typography
                    sx={{
                      mb: 2,
                      fontSize: '35px',
                      fontWeight: 500,
                      lineHeight: '40px',
                      color: '#013f34',
                      textAlign: 'center', 
                      marginTop: 20
                    }}
                  >{`Check back soon for exciting updates`}</Typography>
              </motion.div>
            </Grid>
        }

      </Grid>
    </Container>
  );
};

export default NewsPage;