import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Container, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Card, Header } from "./components";

import styles from "./styles.module.css";
import { Layout } from "../../../components";




const Grado = () => {
    const params = useParams();
    const grado = params.grado;
    const title = grado.replace("-", " ").concat("°");
    const [addIsOpen, setAddIsOpen] = useState(false);

    const breadcrumbs = [
        
        <Link
            underline="hover"
            key="2"
            color="inherit"
            aria-current="page"
            component={RouterLink}
            to="/material-educativo"
        >
            Material Educativo
        </Link>,
        <Typography key="3" color="text.primary">
            {title}
        </Typography>,
    ];
    
    return (
        <Layout title={title} breadcrumbs={breadcrumbs}>
         
            <Outlet />
            <Container maxWidth={"xl"} sx={{ my: 6 }}>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <Card title={"Comunicacion Integral"} />
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
        </Layout>
    );
};

export default Grado;
