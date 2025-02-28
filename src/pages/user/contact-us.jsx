import React, { useState, useEffect } from 'react';
// material-ui
import { Container, Grid, Typography, TextField, Input, Button } from '@mui/material';
import { Link as RouterLink, useParams, useNavigate } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';

import axios from 'utils/axios';
import { openSnackbar } from 'api/snackbar';


// ==============================|| LANDING - FEATURE PAGE ||============================== //

const ContactUsPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')


  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('comment', comment);
    
    try {
      await axios.post('/api/contact', {
        name, 
        email, 
        comment
      });

      openSnackbar({
        open: true,
        message: 'Message sent successfully.',
        variant: 'alert',
        alert: {
          color: 'success'
        },
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        transition: 'SlideLeft'
      });

      navigate('/contact/success');
    } catch (error) {
      
    }
  }

  return (
    <Container maxWidth sx={{ maxWidth: '976px' }} >
      <Grid container alignItems="center" justifyContent="center" spacing={0} sx={{ mt: { md: 15, xs: 15 }, pb: { md: 10, xs: 2.5 }, pt: { md: 8, xs: 2.5 } }}>
        
        <Grid item xs={12} >
          <MainCard contentSX={{ p: 1 }} sx={{ border: 'none', backgroundColor: 'transparent' }}>
            
            <Grid >
              <Typography variant="body1" sx={{ mb: 3, color: '#4a5b58', fontSize: '42px', fontFamily: 'monospace' }} textAlign={'center'} fontWeight={'bold'} >
                {`Contact Us`}
              </Typography>
            </Grid>

            <Grid container spacing={0} alignItems={'center'} backgroundColor={'#FFFFFF'} paddingTop={8} paddingBottom={4} paddingX={5} gap={2}>

              <Grid item xs={12} container alignItems={'center'} >
                <Grid item xs={4} container justifyContent={'space-between'} pr={2}>
                  <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '32px', display: 'flex' }}  fontWeight={'medium'}  >
                    {'Name'}
                  </Typography> 
                  <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '32px' }}  fontWeight={'medium'} >
                    {':'}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField required fullWidth sx={{ '& .MuiOutlinedInput-root': { fontSize: '28px' } }} onChange={(e) => setName(e.target.value)} />
                </Grid>
              </Grid>

              <Grid item xs={12} container alignItems={'center'} >
                <Grid item xs={4} container justifyContent={'space-between'} pr={2}>
                  <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '32px', display: 'flex' }}  fontWeight={'medium'}  >
                    {'Email'}
                  </Typography> 
                  <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '32px' }}  fontWeight={'medium'} >
                    {':'}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField required fullWidth sx={{ '& .MuiOutlinedInput-root': { fontSize: '28px' } }} onChange={(e) => setEmail(e.target.value)} />
                </Grid>
              </Grid>

              <Grid item xs={12} container >
                <Grid item xs={4} container justifyContent={'space-between'} pr={2}>
                  <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '32px', display: 'flex' }}  fontWeight={'medium'}  >
                    {'Details'}
                  </Typography> 
                  <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '32px' }}  fontWeight={'medium'} >
                    {':'}
                  </Typography>
                </Grid>
                <Grid item xs={8} sx={{ position: 'relative' }}>
                  <TextField required fullWidth sx={{ '& .MuiOutlinedInput-root': { fontSize: '28px' } }} onChange={(e) => setComment(e.target.value)} multiline rows={5} />
                  <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '16px', position: 'absolute', bottom: 10, right: 10 }}  fontWeight={'medium'} >
                    {`0/500`}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} container alignItems={'center'} justifyContent={'center'} gap={3} mt={2} >
                <Button variant="contained" color="secondary"  onClick={handleSubmit} sx={{ fontSize: '32px', textAlign: 'left', color: '#FFFFFF', backgroundColor: '#e53f11', fontStyle: 'italic', minWidth: '250px' }} >
                    {`Submit`}
                </Button>
                <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '24px', display: 'flex' }}  fontWeight={'medium'} gap={1} >
                  {'Alternatively, feel free to email our team at '}
                  <Typography variant="body1" sx={{ color: '#009be3', fontSize: '24px', display: 'flex' }}  fontWeight={'medium'}  >
                    {' info@5oakgames.com'}
                  </Typography>
                </Typography> 
              </Grid>


            </Grid>
          </MainCard>
        </Grid>

      </Grid>
    </Container>
  );
};

export default ContactUsPage;