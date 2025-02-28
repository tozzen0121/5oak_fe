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
import UploadMultiFile from 'components/third-party/dropzone/MultiFile';
import { getImageUrl } from 'utils/getImageUrl';
import { openSnackbar } from 'api/snackbar';


// ==============================|| LAYOUTS- ACTION BAR ||============================== //
function GameForm() {
  const { id } = useParams();
  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ image, setImage ] = useState(null)
  const [ images, setImages ] = useState([])

  const navigate = useNavigate();

  const handleSubmit = async () => {

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (image?.length > 0 && image[0] instanceof File) {
      formData.append('image', image[0]);
    }

    if (images?.length > 0) {
      images.forEach((img) => {
        if(img instanceof File){
          formData.append('images[]', img);
        } else {
          formData.append('images_paths[]', img?.path);
        }
      });
    }

    try {
      if( id ) {
        await axios.putForm(`/api/game/${id}`, formData);
      } else {
        await axios.postForm('/api/game', formData);
      }

      openSnackbar({
        open: true,
        message: id ? 'Game updated' : 'New Game created',
        variant: 'alert',
        alert: {
          color: 'success'
        },
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        transition: 'SlideLeft'
      });

      navigate('/admin/games');
    } catch (error) {
      
    }
  }

  useEffect(() => {
    const fetchGame = async (id) => {
      try {
        const { data } = await fetcher(`/api/game/${id}`);
        setName(data.name);
        setDescription(data.description);
        setImage([{preview: getImageUrl(data.imagePath)}]);
        setImages(data.imagesPaths.map((image) => ({ preview: getImageUrl(image), type: "image/jpeg", path: image })));
      } catch (error) {
        
      }
    }

    if( id ) {
      fetchGame(id);
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
                      <InputLabel>Game Name</InputLabel>
                      <TextField fullWidth placeholder="Game name" onChange={(e) => setName(e.target.value)} value={name} />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel>Description</InputLabel>
                      <TextField fullWidth placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} multiline rows={4} />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} >
                    <Stack spacing={1}>
                      <InputLabel>Main Image</InputLabel>
                      <Grid item xs={12} container justifyContent={'center'}>
                        <Grid item xs={7} >
                          <UploadSingleFile setFieldValue={(field, value) => setImage(value)} file={image} />
                        </Grid>
                      </Grid>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} >
                    <Stack spacing={1}>
                      <InputLabel>Game Images</InputLabel>
                      <UploadMultiFile
                        showList={true}
                        setFieldValue={( field, value ) => setImages(value)}
                        files={images}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ width: 1, px: 1.5, py: 0.75 }}>
                  <Link to={`/admin/games`}>
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

export default GameForm;
