import { useEffect, useState } from 'react';
import axios, { fetcher } from 'utils/axios';
import { useParams } from 'react-router';
import { useNavigate, Link } from 'react-router-dom';

// material-ui
import {
  Button,
  CardContent,
  CardActions,
  Divider,
  FormHelperText,
  Grid,
  InputLabel,
  Stack,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import { openSnackbar } from 'api/snackbar';


// ==============================|| LAYOUTS- ACTION BAR ||============================== //
function JobForm() {
  const { id } = useParams();
  const [ name, setName ] = useState('')
  const [ location, setLocation ] = useState('')
  const [ description, setDescription ] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if( id ) {
        await axios.put(`/api/job/${id}`, {
          name, 
          location, 
          description,
        });
      } else {
        await axios.post('/api/job', {
          name, 
          location, 
          description,
        });
      }

      openSnackbar({
        open: true,
        message: id ? 'Job updated' : 'New Job created',
        variant: 'alert',
        alert: {
          color: 'success'
        },
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        transition: 'SlideLeft'
      });

      navigate('/admin/jobs');
    } catch (error) {
      
    }
  }

  useEffect(() => {
    const fetchJob = async (id) => {
      try {
        const { data } = await fetcher(`/api/job/${id}`);
        setName(data.name);
        setLocation(data.location);
        setDescription(data.description);
      } catch (error) {
        
      }
    }

    if( id ) {
      fetchJob(id);
    }
  }, [ id ])


  return (
    <Grid container spacing={3} justifyContent={'center'}>
      <Grid item xs={12} md={6} lg={6} >
        <Grid container spacing={3}>
          <Grid item xs={12}>

            <MainCard title={ '' } content={false}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel>Job Name</InputLabel>
                      <TextField fullWidth placeholder="Job name" onChange={(e) => setName(e.target.value)} value={name} />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel>Location</InputLabel>
                      <TextField fullWidth placeholder="Location" onChange={(e) => setLocation(e.target.value)} value={location} />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel>Description</InputLabel>
                      <TextField fullWidth placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} multiline rows={4} />
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ width: 1, px: 1.5, py: 0.75 }}>
                  <Link to={`/admin/jobs`}>
                    <Button color="error" size="small">
                      Cancel
                    </Button>
                  </Link>
                  <Button variant="contained" size="small" onClick={() => handleSubmit()}>
                    Submit
                  </Button>
                </Stack>
              </CardActions>
            </MainCard>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default JobForm;
