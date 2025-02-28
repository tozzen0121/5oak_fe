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
  Grid,
  Stack,
  Typography
} from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import PDFViewerModal from 'sections/apps/customer/PDFViewerModal';


// ==============================|| LAYOUTS- ACTION BAR ||============================== //
function Applicant() {
    const { id } = useParams();
    const [ data, setData ] = useState(null)
    const [ open, setOpen ] = useState(false)
    const [ pdfOpen, setPdfOpen ] = useState(false)
    const [ url, setUrl ] = useState(null)

  
    const navigate = useNavigate();


    useEffect(() => {
        const fetchApplicant = async (id) => {
        try {
            const { data } = await fetcher(`/api/applicant/${id}`);
            setData(data)
        } catch (error) {
            
        }
        }

        if( id ) {
        fetchApplicant(id);
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
                                    <Typography>{data?.name}</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <Typography color="secondary">Email</Typography>
                                    <Typography>{data?.email}</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <Typography color="secondary">Job Title</Typography>
                                    <Typography>{data?.job_title}</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} flexDirection={'column'} display={'flex'} gap={2} >
                                <Button 
                                    variant="contained" 
                                    color="success" 
                                    disabled={!data?.coverPath} 
                                    onClick={() => {
                                        setUrl(data?.coverPath)
                                        setPdfOpen(true)
                                    }}
                                >VIEW COVER LETTER
                                </Button>
                                <Button 
                                    variant="contained" 
                                    color="success" 
                                    disabled={!data?.cvPath} 
                                    onClick={() => {
                                        setUrl(data?.cvPath)
                                        setPdfOpen(true)
                                    }}
                                >VIEW CV</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ width: 1, px: 1.5, py: 0.75 }}>
                        <Link to={`/admin/careers`}>
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
                await axios.delete(`/api/applicant/${id}`);
                setOpen(false);
                navigate('/admin/careers');
            } catch (error) {
            
            }
        }} />
        <PDFViewerModal open={pdfOpen} modalToggler={() => {
            setUrl(null)
            setPdfOpen(false)
        }} url={url} />
    </>
  );
}

export default Applicant;
