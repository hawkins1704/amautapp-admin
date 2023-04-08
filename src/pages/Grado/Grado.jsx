import React from "react";
import { Layout } from "../../components";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { Card, Header } from "./components";

import styles from "./styles.module.css";

const Grado = () => {
    const params = useParams();
    const grado = params.grado;
    const title=grado.replace('-',' ').concat('°')
    return (
        <Layout>
            <Header title={title}/>
            <Container maxWidth={"xl"}>
                <Container maxWidth={"xl"} sx={{ mb: 6 }}>
                    <Grid container spacing={6}>
                        <Grid item md={4} xs={12}>
                            <Card
                                title={"Comunicacion Integral"}
                            />
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
            </Container>
        </Layout>
    );
};

export default Grado;
