import React from "react";
import { Layout } from "../../components";
import { Container, Typography } from "@mui/material";

const Profesores = () => {
    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Profesores
        </Typography>,
    ];
    return (
        <Layout title={"Profesores"} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <div>Profesores</div>
            </Container>
        </Layout>
    );
};

export default Profesores;
