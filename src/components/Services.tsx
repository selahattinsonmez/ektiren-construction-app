import React, { useState } from 'react';
import {Grid, CardActionArea, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import servicesImage from '../img/hizmetlerimiz.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';


const ResponsiveSize = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    
    [theme.breakpoints.up('xs')]: {
        maxWidth: '350px',
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: 'unset'
    }
  }));

const serviceList = [
{url: servicesImage, title: 'İnşaat', description: 'Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in.'}
,{url: servicesImage, title: 'İnşaat', description: 'Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in.'}
,{url: servicesImage, title: 'İnşaat', description: 'Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in.'}
,{url: servicesImage, title: 'İnşaat', description: 'Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in.'}];
const Services = ({props}) => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Grid style={{background:'white', marginBottom: '20px'}} justifyContent="center" alignItems="center" container>
                <Grid container justifyContent="center" alignItems="center" item>
                    <h1>{t('services')}</h1>
                </Grid>

            </Grid>
            <Container fixed>
                <Grid style={{background:'white'}} justifyContent="" alignItems="" container spacing={5}>

                    {serviceList.map((link, index) => (

                            <Grid item xs={6} md={3}>
                                <img style={{width: "100%"}} src={link.url}></img>
                                <p style={{margin: '0px', marginTop: '5px', fontWeight:'bold', fontSize: '20px'}}>{link.title}</p>
                                <p style={{margin: '0px', marginTop: '5px'}}>{link.description}</p>
                            </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>

    )
}

export default Services;