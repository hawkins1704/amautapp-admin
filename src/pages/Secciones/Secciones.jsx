import React from "react";
import { Layout } from "../../components";
import { Container, Typography } from "@mui/material";

const Secciones = () => {
    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Secciones
        </Typography>,
    ];
    return (
        <Layout title={"Secciones"} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <div>Secciones</div>
            </Container>
        </Layout>
    );
};

export default Secciones;
