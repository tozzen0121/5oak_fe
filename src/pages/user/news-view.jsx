import React, { useState, useEffect } from 'react';
// material-ui
import { Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';


import axios from 'utils/axios';
import { getImageUrl } from 'utils/getImageUrl';


// ==============================|| LANDING - FEATURE PAGE ||============================== //

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const NewsViewPage = () => {
  const { id } = useParams();

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async (_id) => {
      try {
        const { data } = await axios.get(`/api/news/${_id}`);
        setNews(data?.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData(id);
  }, [ id ]);

  return (
    <Container maxWidth sx={{ maxWidth: '1266px' }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 15 }, pb: { md: 10, xs: 2.5 }, pt: { md: 4, xs: 2.5 } }}>
        
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="center" sx={{ textAlign: 'center' }}>
            <Grid item sm={12} >
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12}>
                    <img src={`${getImageUrl(news?.imagePath)}`} alt="feature" style={{ maxHeight: '400px', height: '400px', objectFit: 'fill', width: '100%' }} />
                  </Grid>

                  <Grid item xs={12} mt={1} container justifyContent={'space-between'}>
                    <Typography variant="body1" sx={{ color: '#2b2b2b', whiteSpace: 'pre-wrap', fontSize: '28px', lineHeight: '28px', textAlign: 'left', fontWeight: 'bold' }}>
                      {news?.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#2b2b2b', whiteSpace: 'pre-wrap', fontSize: '20px', lineHeight: '20px', textAlign: 'left' }} mt={1}>
                      {(new Date(news?.created_at)).toLocaleDateString('en-GB', options)}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="body1" sx={{ color: '#2b2b2b', whiteSpace: 'pre-wrap', fontSize: '20px', lineHeight: '20px', textAlign: 'left' }} mt={1}>
                      {news?.description}
                    </Typography>
                  </Grid>


              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Container>
  );
};

export default NewsViewPage;