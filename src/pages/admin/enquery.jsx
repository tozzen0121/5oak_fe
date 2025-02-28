import { useEffect, useState } from 'react';
import axios, { fetcher } from 'utils/axios';
import { useParams } from 'react-router';
import { useNavigate, Link } from 'react-router-dom';
import AlertCustomerDelete from 'sections/apps/customer/AlertCustomerDelete';

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
function Enquery() {
  const { id } = useParams();
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ comment, setComment ] = useState('')
  const [open, setOpen] = useState(false);
  
  const navigate = useNavigate();


  useEffect(() => {
    const fetchCareer = async (id) => {
      try {
        const { data } = await fetcher(`/api/contact/${id}`);
        setName(data.name);
        setEmail(data.email);
        setComment(data.comment);
      } catch (error) {
        
      }
    }

    if( id ) {
      fetchCareer(id);
    }
  }, [ id ])


  return (
    <>
        <Grid container spacing={3} justifyContent={'center'}>
        <Grid item xs={12} md={6} lg={6} >
            <Grid container spacing={3}>
            <Grid item xs={12}>

                <MainCard title={ '' } content={false}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <Typography color="secondary">Name</Typography>
                            <Typography>{name}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <Typography color="secondary">Email</Typography>
                            <Typography>{email}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <Typography color="secondary">Enquery</Typography>
                            <Typography>{comment}</Typography>
                        </Stack>
                    </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                    <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ width: 1, px: 1.5, py: 0.75 }}>
                    <Link to={`/admin/contacts`}>
                        <Button color="error" size="small">
                        Cancel
                        </Button>
                    </Link>
                    <Button variant="contained" size="small" onClick={(e) => {
                        e.stopPropagation();
                        setOpen(true);
                    }} color="error">
                        Delete
                    </Button>
                    </Stack>
                </CardActions>
                </MainCard>

            </Grid>
            </Grid>
        </Grid>
        </Grid>
        <AlertCustomerDelete id={id} title={id} open={open} handleClose={() => setOpen(false)} deletehandler={ async () => {
            try {
                await axios.delete(`/api/contact/${id}`);
                setOpen(false);
                navigate('/admin/contacts');
            } catch (error) {
            
            }
        }} />
    </>
  );
}

export default Enquery;
