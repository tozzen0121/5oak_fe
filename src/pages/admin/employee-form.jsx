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
import UploadSingleFile from 'components/third-party/dropzone/SingleFile';
import { getImageUrl } from 'utils/getImageUrl';
import { openSnackbar } from 'api/snackbar';


// ==============================|| LAYOUTS- ACTION BAR ||============================== //
function EmployeeForm() {
  const { id } = useParams();
  const [ name, setName ] = useState('')
  const [ title, setTitle ] = useState('')
  const [ profile, setProfile ] = useState('')
  const [ image, setImage ] = useState(null)

  const navigate = useNavigate();

  const handleSubmit = async () => {

    const formData = new FormData();
    formData.append('name', name);
    formData.append('title', title);
    formData.append('profile', profile);
    if (image?.length > 0 && image[0] instanceof File) {
      formData.append('image', image[0]);
    }

    try {
      if( id ) {
        await axios.putForm(`/api/employee/${id}`, formData);
      } else {
        await axios.postForm('/api/employee', formData);
      }

      openSnackbar({
        open: true,
        message: id ? 'Employee updated successfully' : 'Employee added successfully',
        variant: 'alert',
        alert: {
          color: 'success'
        },
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        transition: 'SlideLeft'
      });

      navigate('/admin/team');
    } catch (error) {
      
    }
  }

  useEffect(() => {
    const fetchEmployee = async (id) => {
      try {
        const { data } = await fetcher(`/api/employee/${id}`);
        setName(data.name);
        setTitle(data.title);
        setProfile(data.profile);
        setImage([{preview: getImageUrl(data.imagePath)}]);
      } catch (error) {
        
      }
    }

    if( id ) {
      fetchEmployee(id);
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
                      <InputLabel>Employee Name</InputLabel>
                      <TextField fullWidth placeholder="Employee Name" onChange={(e) => setName(e.target.value)} value={name} />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel>Employee Title</InputLabel>
                      <TextField fullWidth placeholder="Employee Title" onChange={(e) => setTitle(e.target.value)} value={title} />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel>Profile</InputLabel>
                      <TextField fullWidth placeholder="Profile" onChange={(e) => setProfile(e.target.value)} value={profile} multiline rows={4} />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} >
                    <Stack spacing={1}>
                      <InputLabel>Game Image</InputLabel>
                      <Grid item xs={12} container justifyContent={'center'}>
                        <Grid item xs={7} >
                          <UploadSingleFile setFieldValue={(field, value) => setImage(value)} file={image} />
                        </Grid>
                      </Grid>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ width: 1, px: 1.5, py: 0.75 }}>
                  <Link to={`/admin/team`}>
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

export default EmployeeForm;
