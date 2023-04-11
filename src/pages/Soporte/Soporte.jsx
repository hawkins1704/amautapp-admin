import React from "react";
import { Layout } from "../../components";
import { Container, Typography } from "@mui/material";

const Soporte = () => {
    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Soporte
        </Typography>,
    ];
    return (
        <Layout title={"Soporte"} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <div>Soporte</div>
            </Container>
        </Layout>
    );
};

export default Soporte;
