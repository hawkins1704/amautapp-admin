import React from "react";
import { Layout } from "../../components";
import { Container, Typography } from "@mui/material";

const CentrosEducativos = () => {
    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Centros Educativos
        </Typography>,
    ];
    return (
        <Layout title={"Centros Educativos"} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <div>Centros Educativos</div>
            </Container>
        </Layout>
    );
};

export default CentrosEducativos;
