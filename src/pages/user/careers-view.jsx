import React, { useState, useEffect } from 'react';
// material-ui
import { Container, Grid, Typography, Button } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';


import axios from 'utils/axios';
import BagImage from 'src/assets/images/5oak/bag.png';


// ==============================|| LANDING - FEATURE PAGE ||============================== //

const CareerViewPage = () => {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchData = async (_id) => {
      try {
        const { data } = await axios.get(`api/job/${_id}`);
        setJob(data?.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData(id);
  }, [id]);

  return (
    <Container >
      <Grid container alignItems="center" justifyContent="center" spacing={0} sx={{ mt: { md: 15, xs: 15 }, pb: { md: 10, xs: 2.5 }, pt: { md: 8, xs: 2.5 } }}>
        
        <Grid item xs={12} >
          <MainCard contentSX={{ p: 1 }} sx={{ border: 'none', backgroundColor: 'transparent' }}>
            <Grid container spacing={0} alignItems={'center'} backgroundColor={'#FFFFFF'} paddingBlock={5} paddingX={5}>

              <Grid item xs={12} md={5}>
                <Grid item xs={12} container>
                  <Grid item xs={6} >
                    <Typography variant="body1" sx={{ color: '#4a5b58', whiteSpace: 'pre-wrap', fontSize: '30px', lineHeight: '45px', textAlign: 'left' }} mt={1}>
                      Role
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{ color: '#4a5b58', whiteSpace: 'pre-wrap', fontSize: '30px', lineHeight: '45px', textAlign: 'left' }} mt={1}>
                      {`: ${job?.name}`}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={6} >
                    <Typography variant="body1" sx={{ color: '#4a5b58', whiteSpace: 'pre-wrap', fontSize: '30px', lineHeight: '45px', textAlign: 'left' }} mt={1}>
                      Location
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{ color: '#4a5b58', whiteSpace: 'pre-wrap', fontSize: '30px', lineHeight: '45px', textAlign: 'left' }} mt={1}>
                      {`: ${job?.location}`}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={6} >
                    <Typography variant="body1" sx={{ color: '#4a5b58', whiteSpace: 'pre-wrap', fontSize: '30px', lineHeight: '45px', textAlign: 'left' }} mt={1}>
                      Date Created
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{ color: '#4a5b58', whiteSpace: 'pre-wrap', fontSize: '30px', lineHeight: '45px', textAlign: 'left' }} mt={1}>
                      {`: ${new Date(job?.created_at).toLocaleDateString('en-GB').replace(/\//g, '/')}`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography variant="body1" sx={{ color: '#e9e9e9', whiteSpace: 'pre-wrap', fontSize: '80px', lineHeight: '80px', textAlign: 'left', textTransform: 'uppercase', transform: 'scaleY(2.2)', fontWeight: 900 }} mt={1} >
                  {`join our team`}
                </Typography>
              </Grid>
              
              <Grid item xs={12} mt={2} container justifyContent={'center'}>
                <Typography variant="body1" sx={{ color: '#4a5b58', whiteSpace: 'pre-wrap', fontSize: '30px', lineHeight: '50px', textAlign: 'left' }} mt={1}>
                  {job?.description}
                </Typography>
              </Grid>

              <Grid item xs={12} mt={3} container justifyContent={'center'}>
                <Button variant="contained" color="secondary"  component={RouterLink} to={`/staging/careers/${job?._id}/apply`} sx={{ fontSize: '20px', textAlign: 'left', color: '#FFFFFF', backgroundColor: '#e53f11', fontStyle: 'italic' }} >
                    {`Apply Now`}
                </Button>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>

      </Grid>
    </Container>
  );
};

export default CareerViewPage;