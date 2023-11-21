import React, { useState } from 'react';
import {Grid, Button, CardActionArea, CardActions, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import backgroundImage from '../img/proje.jpg'
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

const projectList = [
{url: backgroundImage, title: 'GREEN PARK VİLLAS', description: 'Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'}
,{url: backgroundImage, title: 'GREEN PARK VİLLAS', description: 'Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'}
,{url: backgroundImage, title: 'GREEN PARK VİLLAS', description: 'Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'}
,{url: backgroundImage, title: 'GREEN PARK VİLLAS', description: 'Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'}
,{url: backgroundImage, title: 'GREEN PARK VİLLAS', description: 'Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'}
,{url: backgroundImage, title: 'GREEN PARK VİLLAS', description: 'Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'}];
const Projects = ({props}) => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Grid style={{background:'white', marginBottom: '20px'}} justifyContent="center" alignItems="center" container>
                <Grid container justifyContent="center" alignItems="center" item>
                    <h1>{t('projects')}</h1>
                </Grid>

            </Grid>
            <Container fixed>
                <Grid style={{background:'white'}} justifyContent="" alignItems="" container spacing={5}>

                    {projectList.map((link, index) => (
                        <Grid container justifyContent="" alignItems="" item xs={12} md={5} lg={4}>
                            <ResponsiveSize>
                                <Card sx={{border: 'none'}}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        image={link.url}
                                        alt="green iguana"
                                        />
                                        <CardContent>
                                        <Typography style={{textAlign: 'left'}} gutterBottom variant="h5" component="div">
                                            {link.title}
                                        </Typography>
                                        <Typography style={{textAlign: 'left'}} variant="body2" color="text.secondary">
                                            {link.description}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </ResponsiveSize>
                        </Grid>
                    ) )}
                </Grid>
            </Container>
        </React.Fragment>

    )
}

export default Projects;