import React, { useState, useEffect } from 'react';
// material-ui
import { Container, Grid, Typography, TextField, Input, Button } from '@mui/material';
import { Link as RouterLink, useParams, useNavigate } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';

import axios from 'utils/axios';
import { openSnackbar } from 'api/snackbar';


// ==============================|| LANDING - FEATURE PAGE ||============================== //

const CareersApplyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [cv, setCv] = useState(null)
  const [cover, setCover] = useState(null)

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

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('job_title', job?.name);
    formData.append('cv', cv);
    formData.append('cover', cover);
    
    try {
      await axios.postForm('/api/applicant', formData);

      openSnackbar({
        open: true,
        message: 'Applicant sent successfully.',
        variant: 'alert',
        alert: {
          color: 'success'
        },
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        transition: 'SlideLeft'
      });

      navigate('/careers/apply-success');
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
                {`Application Form`}
              </Typography>
            </Grid>

            <Grid container spacing={0} alignItems={'center'} backgroundColor={'#FFFFFF'} paddingBlock={5} paddingX={5} gap={2}>

              <Grid item xs={12}>
                <Typography variant="body1" sx={{ mb: 3, color: '#4a5b58', fontSize: '42px' }} textAlign={'center'} fontWeight={'medium'} >
                  {job?.name}
                </Typography>
              </Grid>

              <Grid item xs={12} container alignItems={'center'} >
                <Grid item xs={5} container justifyContent={'space-between'} pr={2}>
                  <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '32px', display: 'flex' }}  fontWeight={'medium'}  >
                    {'Name'}
                    <Typography variant="body1" sx={{ color: '#ff0000', fontSize: '32px' }}  fontWeight={700}  >*</Typography> 
                  </Typography> 
                  <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '32px' }}  fontWeight={'medium'} >
                    {':'}
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <TextField required fullWidth sx={{ '& .MuiOutlinedInput-root': { fontSize: '28px' } }} onChange={(e) => setName(e.target.value)} />
                </Grid>
              </Grid>

              <Grid item xs={12} container alignItems={'center'} >
                <Grid item xs={5} container justifyContent={'space-between'} pr={2}>
                  <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '32px', display: 'flex' }}  fontWeight={'medium'}  >
                    {'Email'}
                    <Typography variant="body1" sx={{ color: '#ff0000', fontSize: '32px' }}  fontWeight={700}  >*</Typography> 
                  </Typography> 
                  <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '32px' }}  fontWeight={'medium'} >
                    {':'}
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <TextField required fullWidth sx={{ '& .MuiOutlinedInput-root': { fontSize: '28px' } }} onChange={(e) => setEmail(e.target.value)} />
                </Grid>
              </Grid>

              <Grid item xs={12} container alignItems={'center'} >
                <Grid item xs={5} container justifyContent={'space-between'} pr={2}>
                  <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '32px', display: 'flex' }}  fontWeight={'medium'}  >
                    {'Phone Number'}
                    <Typography variant="body1" sx={{ color: '#ff0000', fontSize: '32px' }}  fontWeight={700}  >*</Typography> 
                  </Typography> 
                  <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '32px' }}  fontWeight={'medium'} >
                    {':'}
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <TextField required fullWidth sx={{ '& .MuiOutlinedInput-root': { fontSize: '28px' } }} onChange={(e) => setPhone(e.target.value)} />
                </Grid>
              </Grid>
              
              <Grid item xs={12} container alignItems={'center'} >
                <Grid item xs={5} container justifyContent={'space-between'} pr={2}></Grid>
                <Grid item xs={7} container>
                  <Grid item xs={5}>
                    <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '20px', display: 'flex' }}  fontWeight={'medium'}  >
                      Upload your CV
                      <Typography variant="body1" sx={{ color: '#ff0000', fontSize: '20px' }}  fontWeight={700}  >*</Typography> 
                    </Typography>
                    <label htmlFor="contained-button-cv" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Input accept="application/pdf" id="contained-button-cv" type="file" sx={{ display: 'none' }} onChange={(e) => setCv(e.target.files[0])} />
                      <Button variant="contained" component="span"  color="secondary">
                        Upload
                      </Button>
                      {
                        !cv && 
                        <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '16px', display: 'flex' }}  fontWeight={'medium'}  >
                          no file choosen
                        </Typography>
                      }
                    </label>
                  </Grid>

                  <Grid item xs={7}>
                    <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '20px', display: 'flex', whiteSpace: 'nowrap' }}  fontWeight={'medium'}  >
                      Upload a cover letter (optional)
                      <Typography variant="body1" sx={{ color: '#ff0000', fontSize: '20px' }}  fontWeight={700}  >*</Typography> 
                    </Typography>
                    <label htmlFor="contained-button-cover" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Input accept="application/pdf" id="contained-button-cover" type="file" sx={{ display: 'none' }} onChange={(e) => setCover(e.target.files[0])} />
                      <Button variant="contained" component="span"  color="secondary">
                        Upload
                      </Button>
                      {
                        !cover && 
                        <Typography variant="body1" sx={{ color: '#4a5b58', fontSize: '16px', display: 'flex' }}  fontWeight={'medium'}  >
                          no file choosen
                        </Typography>
                      }
                    </label>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} container alignItems={'center'} justifyContent={'center'} gap={5} mt={2} >
                <Button variant="contained" color="secondary" component={RouterLink} to={`/staging/careers/${id}`} sx={{ fontSize: '20px', textAlign: 'left', color: '#FFFFFF', fontStyle: 'italic', minWidth: '150px' }} >
                    {`Cancel`}
                </Button>

                <Button variant="contained" color="secondary"  onClick={handleSubmit} sx={{ fontSize: '20px', textAlign: 'left', color: '#FFFFFF', backgroundColor: '#e53f11', fontStyle: 'italic', minWidth: '150px' }} >
                    {`Apply`}
                </Button>
              </Grid>


            </Grid>
          </MainCard>
        </Grid>

      </Grid>
    </Container>
  );
};

export default CareersApplyPage;