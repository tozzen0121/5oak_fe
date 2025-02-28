import React, { useState, useEffect } from 'react';
// material-ui
import { Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';
import { motion } from 'framer-motion';

import LogoLg from 'src/assets/images/5oak/logo-lg.png';

import axios from 'utils/axios';
import { getImageUrl } from 'utils/getImageUrl';


// ==============================|| LANDING - FEATURE PAGE ||============================== //

const TeamPage = () => {
  const [employees, setEmployees] = useState([]);
  const [emp, setEmp] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/employee');
        setEmployees(data?.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container maxWidth sx={{ maxWidth: '1600px' }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 15 }, pb: { md: 10, xs: 2.5 }, pt: { md: 8, xs: 2.5 } }}>
        
        <Grid container sm={12} md={6} item alignItems="center" sx={{ justifyContent: { sm: 'flex-start', md: 'center' } }} >
          {
            employees?.slice(0, 1)?.map((emp) => (
              <Grid item xs={12} >
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30
                  }}
                >
                  <MainCard contentSX={{ p: 0 }} sx={{ border: 'none', backgroundColor: 'transparent' }}>
                    <Grid container display={'flex'} flexDirection={'row'} flexWrap={'nowrap'} alignItems={'center'} sx={{ justifyContent: { sm: 'flex-start', md: 'center' } }} >
                      <img src={`${getImageUrl(emp?.imagePath)}`} alt="feature" style={{ maxWidth: '175px', maxHeight: '175px', height: '175px', objectFit: 'cover', width: '100%', borderRadius:'100%' }} />
                      <Grid xs={6} alignItems="flex-start" justifyContent="center" sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '10px', maxWidth: 'max-content !important' }}>
                        <Typography sx={{ color: '#2b2b2b', fontSize: '22px', lineHeight: '22px', textAlign: 'center', fontWeight: '600', whiteSpace: 'nowrap' }}>
                          {emp?.name}
                        </Typography>
                        <Typography sx={{ color: '#2b2b2b', fontSize: '22px', lineHeight: '22px', textAlign: 'center', fontWeight: '600', whiteSpace: 'nowrap' }}>
                          {emp?.title}
                        </Typography>
                        <Link className="header-link"  component={RouterLink} onClick={() => setEmp(emp)} sx={{ fontSize: '22px', textDecoration: 'underline', textAlign: 'left', whiteSpace: 'nowrap' }} >
                          {`more info →`}
                        </Link>
                      </Grid>
                    </Grid>
                  </MainCard>
                </motion.div>
              </Grid>
            ))
          }

          {
            employees?.slice(1, 5)?.map((emp, index) => (
              <Grid item sm={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30
                  }}
                >
                  <MainCard contentSX={{ p: 0 }} sx={{ border: 'none', backgroundColor: 'transparent' }}>
                    <Grid container display={'flex'} flexDirection={'row'} flexWrap={'nowrap'} alignItems={'center'} justifyContent={'flex-start'}>
                      <img src={`${getImageUrl(emp?.imagePath)}`} alt="feature" style={{ maxWidth: '175px', maxHeight: '175px', height: '175px', objectFit: 'cover', width: '100%', borderRadius:'100%' }} />
                      <Grid xs={6} alignItems="flex-start" justifyContent="center" sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '10px', maxWidth: 'max-content !important' }}>
                        <Typography sx={{ color: '#2b2b2b', fontSize: '22px', lineHeight: '22px', textAlign: 'center', fontWeight: '600', whiteSpace: 'nowrap' }}>
                          {emp?.name}
                        </Typography>
                        <Typography sx={{ color: '#2b2b2b', fontSize: '22px', lineHeight: '22px', textAlign: 'center', fontWeight: '600', whiteSpace: 'nowrap' }}>
                          {emp?.title}
                        </Typography>
                        <Link className="header-link"  component={RouterLink} onClick={() => setEmp(emp)} sx={{ fontSize: '22px', textDecoration: 'underline', textAlign: 'left', whiteSpace: 'nowrap' }} >
                          {`more info →`}
                        </Link>
                      </Grid>
                    </Grid>
                  </MainCard>
                </motion.div>
              </Grid>
            ))
          }
        </Grid>
        
        <Grid item sm={12} md={6}>
          <Grid container spacing={1} justifyContent="center" sx={{ textAlign: 'center' }}>
            <Grid item sm={12} >
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12}>
                  {
                    !emp && 
                    <img src={LogoLg} alt="feature" style={{ width: '100%' }} />
                  }
                  {
                    emp && 
                    <Grid sx={{ backgroundColor: '#4a5b58', borderRadius: '10px', padding: '50px', marginBottom: '50px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <Grid container >
                        <img src={`${getImageUrl(emp?.imagePath)}`} alt="feature" style={{ maxWidth: '175px', maxHeight: '175px', height: '175px', objectFit: 'cover', width: '100%', borderRadius:'100%' }} />
                        <Grid sm={12} md={6} alignItems="flex-start" justifyContent="center" sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '10px' }}>
                          <Typography sx={{ color: '#FFF', fontSize: { xs: '40px', sm: '40px', md: '60px' }, lineHeight: '60px', textAlign: 'center', fontWeight: '700', whiteSpace: 'nowrap' }}>
                            {emp?.name}
                          </Typography>
                          <Typography sx={{ color: '#FFF', fontSize: { xs: '32px', md: '40px' }, lineHeight: '60px', textAlign: 'center', fontWeight: '300', whiteSpace: 'nowrap' }}>
                            {emp?.title}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid>
                        <Typography sx={{ color: '#FFF', fontSize: '24px', lineHeight: '30px', textAlign: 'left', fontWeight: '400', whiteSpace: 'pre-wrap' }}>
                          {emp?.profile}
                        </Typography>
                      </Grid>
                    </Grid>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>



      </Grid>
    </Container>
  );
};

export default TeamPage;