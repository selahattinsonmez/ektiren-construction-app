import React, { useState } from 'react';
import {Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import aboutUsImage from '../img/about-us.jpg'
import {AboutUsHead} from './StyledElements.tsx';

const Projects = ({props}) => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Grid style={{background:'white', marginBottom: '20px'}} justifyContent="center" alignItems="center" container>
                <Grid container justifyContent="center" alignItems="center" item>
                    <h1>{t('about-us')}</h1>
                </Grid>

            </Grid>
            <Container fixed>
                <Grid style={{background:'white'}} justifyContent="" alignItems="" container spacing={5}>

                    <Grid item xs={12} md={6}>
                                <img style={{width: "100%"}} src={aboutUsImage}></img>
                    </Grid>
                    <Grid textAlign="left" item xs={12} md={6}>
                        <AboutUsHead>Biz Kimiz?</AboutUsHead>
                        <p style={{marginBottom: '20px'}}>Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                        <p>Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>

    )
}

export default Projects;