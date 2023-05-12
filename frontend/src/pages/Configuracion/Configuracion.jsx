import React from "react";
import { Layout } from "../../components";
import { Container, Typography } from "@mui/material";

const Configuracion = () => {
    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Configuración
        </Typography>,
    ];
    return (
        <Layout title={"Configuración"} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <div>Configuración</div>
            </Container>
        </Layout>
    );
};

export default Configuracion;
