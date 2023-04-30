import React from "react";
import { Layout } from "../../components";
import { Container, Grid } from "@mui/material";
import Banner from "../../assets/images/Banner.png";
import styles from "./styles.module.css";
import { Card } from "./components";
const Principal = () => {
    return (
        <Layout title={"Principal"} breadcrumbs={[]} isPrincipal>
            <div className={styles.banner}></div>
            <Container maxWidth={"xl"} sx={{py:3}}>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Card nombre={"Material educativo"} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Card nombre={"Centros educativos"} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Card nombre={"Configuración"} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Card nombre={"Ayuda y soporte"} />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Principal;
