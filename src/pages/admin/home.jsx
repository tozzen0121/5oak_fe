import { useState, useEffect } from 'react';

// material-ui
import { Button, CardContent, Grid, InputAdornment, InputLabel, Stack, TextField, Tooltip } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';

// assets
import { SaveOutlined } from '@ant-design/icons';

import axios, { fetcher } from 'utils/axios';
import { openSnackbar } from 'api/snackbar';

// ==============================|| PLUGIN - CLIPBOARD ||============================== //

const HomePage = () => {
    const [text2, setText2] = useState(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    );

    const [ home, setHome ] = useState('');

    useEffect(() => {
        fetcher('/api/home').then(({ data }) => {
            setHome(data);
        });
    }, []);

    const handleSave = async () => {
        try {
            const { data } = await axios.post('/api/home', {
                id: home?._id, 
                home: home
            });
            setHome(data?.home)
            openSnackbar({
                open: true,
                message: 'Saved home content',
                variant: 'alert',
                alert: {
                  color: 'success'
                },
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                transition: 'SlideLeft'
            });
        } catch (error) {
            
        }
    }

  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <MainCard title="Home Content Text">
                <Stack mb={3} spacing={1}>
                    {/* <InputLabel>Enter Text to Copy</InputLabel> */}
                    <TextField multiline rows={10} fullWidth placeholder="Home content here" onChange={(e) => setHome((pre) => ({...pre, content: e.target.value}))} value={home?.content} />
                </Stack>
                <Button disabled={Boolean(!home?.content)} variant="contained" size="small" sx={{ mr: 1.5 }} onClick={handleSave}>
                    <SaveOutlined style={{ marginRight: 1 }} /> Save
                </Button>
            </MainCard>
        </Grid>
    </Grid>
  );
};

export default HomePage;
