import React, { useState, useEffect } from 'react';
// material-ui
import { Container, Grid, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';
import { motion } from 'framer-motion';

import axios from 'utils/axios';
import BagImage from 'src/assets/images/5oak/bag.png';


// ==============================|| LANDING - FEATURE PAGE ||============================== //

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/job');
        setJobs(data?.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container >
      <Grid container alignItems="center" justifyContent="center" spacing={0} sx={{ mt: { md: 15, xs: 15 }, pb: { md: 10, xs: 2.5 }, pt: { md: 8, xs: 2.5 } }}>
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="center" sx={{ textAlign: 'center' }}>
            <Grid item sm={12} >
              <Grid container spacing={0} justifyContent="flex-start" alignItems={'center'} gap={4}>
                  <Typography
                    sx={{
                      mb: 2,
                      fontSize: '40px',
                      lineHeight: '40px',
                      color: '#4a5b58',
                      fontWeight: 700
                    }}
                  >
                    Join the team
                  </Typography>

                  <Typography
                    sx={{
                      mb: 1,
                      fontSize: '25px',
                      lineHeight: '25px',
                      color: '#4a5b58',
                      fontWeight: 500
                    }}
                  >
                    {`${ jobs?.length > 0 ? "Current Opportunities" : ""}`}
                  </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {
          jobs?.length === 0 && 
          <Grid item xs={12} mt={10}>
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
                      mb: 1,
                      fontSize: '25px',
                      lineHeight: '25px',
                      color: '#4a5b58',
                      fontWeight: 500
                    }}
                  >
                    No current openings at this time
                  </Typography>
              </motion.div>
            </Grid>
        }

        {
          jobs?.map((job, index) => (
            <Grid item xs={12} key={index}>
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
                  <Grid container spacing={0} alignItems={'center'} maxHeight={140} height={140} backgroundColor={'#FFFFFF'} paddingLeft={5}>
                    <Grid item xs={5} container alignItems={'center'} gap={1}>
                      <img src={BagImage} alt="Bag" style={{ maxWidth: '47px', maxHeight: '40px' }} />
                      <Typography variant="body1" sx={{ color: '#4a5b58', whiteSpace: 'pre-wrap', fontSize: '40px', lineHeight: '40px', textAlign: 'left', fontWeight: 700 }}>
                        {job?.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body1" sx={{ color: '#4a5b58', whiteSpace: 'pre-wrap', fontSize: '32px', lineHeight: '32px', textAlign: 'left', fontStyle: 'italic' }} mt={1}>
                        {job?.location}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="body1" sx={{ color: '#4a5b58', whiteSpace: 'pre-wrap', fontSize: '25px', lineHeight: '25px', textAlign: 'left', fontStyle: 'italic' }} mt={1}>
                        {`Added ${new Date(job?.created_at).toLocaleDateString('en-GB').replace(/\//g, '/')}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={2} mt={1} container justifyContent={'space-between'}>
                      <Button variant="contained" color="secondary"  component={RouterLink} to={`/staging/careers/${job?._id}`} sx={{ fontSize: '20px', textAlign: 'left', color: '#FFFFFF', backgroundColor: '#e53f11', fontStyle: 'italic' }} >
                          {`Apply Now`}
                      </Button>
                    </Grid>
                  </Grid>
                </MainCard>
              </motion.div>
            </Grid>
          ))
        }

      </Grid>
    </Container>
  );
};

export default CareersPage;