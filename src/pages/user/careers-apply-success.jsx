// material-ui
import { Container, Grid, Typography, TextField, Input, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';



// ==============================|| LANDING - FEATURE PAGE ||============================== //

const CareersApplySuccessPage = () => {
  

  return (
    <Container maxWidth sx={{ maxWidth: '976px' }} >
      <Grid container alignItems="center" justifyContent="center" spacing={0} sx={{ mt: { md: 15, xs: 15 }, pb: { md: 10, xs: 2.5 }, pt: { md: 16, xs: 2.5 } }}>
        
        <Grid item xs={12} >
          <MainCard contentSX={{ p: 1 }} sx={{ border: 'none', backgroundColor: 'transparent' }}>

            <Grid container spacing={0} alignItems={'center'} backgroundColor={'#FFFFFF'} paddingBlock={5} paddingX={5} gap={2}>

              <Grid item xs={12}>
                <Typography variant="body1" sx={{ mb: 3, color: '#4a5b58', fontSize: '42px' }} textAlign={'center'} fontWeight={'bold'} >
                  {'Thank you for applying'}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1" sx={{ mb: 3, color: '#4a5b58', fontSize: '42px' }} textAlign={'center'} fontWeight={'light'} >
                  {'A member of the team will be in contact with you as soon as possible.'}
                </Typography>
              </Grid>

              <Grid item xs={12} container alignItems={'center'} justifyContent={'center'} gap={5} mt={2} >

                <Button variant="contained" color="secondary"  component={RouterLink} to={`/staging/careers`} sx={{ fontSize: '32px', textAlign: 'left', color: '#FFFFFF', backgroundColor: '#e53f11', minWidth: '250px' }} >
                    {`OK`}
                </Button>
              </Grid>


            </Grid>
          </MainCard>
        </Grid>

      </Grid>
    </Container>
  );
};

export default CareersApplySuccessPage;