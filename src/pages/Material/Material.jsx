import React from "react";
import {  Layout } from "../../components";
import { Container, Grid, Typography } from "@mui/material";
import styles from './styles.module.css';
import { Card } from "./components";
const Material = () => {
    return (
        <Layout>
            <Container maxWidth={"xl"}>
                <Typography variant={"h4"} component={"h1"} className={styles.title}>
                    Material Educativo
                </Typography>
                <Container maxWidth={"xl"} sx={{mb:6}}>
                    <Typography variant={"h5"} component={"h2"} className={styles.subtitle}>
                        Primaria
                    </Typography>
                    <Grid container spacing={6}>
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
                <Container maxWidth={"xl"}>
                    <Typography variant={"h5"} component={"h2"} className={styles.subtitle}>
                        Secundaria
                    </Typography>
                    <Grid container spacing={6}>
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
