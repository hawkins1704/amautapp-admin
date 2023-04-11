import React from "react";
import {  Layout } from "../../components";
import { Container, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Card } from "./components";
import styles from './styles.module.css';
const Material = () => {
    const breadcrumbs = [
        
        <Typography key="2" color="text.primary">
            Material Educativo
        </Typography>,
    ];
    return (
        <Layout title={'Material Educativo'} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <Container maxWidth={"xl"} sx={{my:6}}>
                    <Typography variant={"h5"} component={"h2"} sx={{my:3}}>
                        Primaria
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
                            <Card ultra={"1°"} title={"Primaria"} />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Card ultra={"2°"} title={"Primaria"} />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Card ultra={"3°"} title={"Primaria"} />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Card ultra={"4°"} title={"Primaria"} />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Card ultra={"5°"} title={"Primaria"} />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Card ultra={"6°"} title={"Primaria"} />
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth={"xl"} sx={{my:6}}>
                    <Typography variant={"h5"} component={"h2"} sx={{my:3}}>
                        Secundaria
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
                            <Card ultra={"1°"} title={"Secundaria"} />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Card ultra={"2°"} title={"Secundaria"} />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Card ultra={"3°"} title={"Secundaria"} />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Card ultra={"4°"} title={"Secundaria"} />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Card ultra={"5°"} title={"Secundaria"} />
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </Layout>
    );
};

export default Material;
