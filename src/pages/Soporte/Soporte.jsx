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
                <Typography variant={"h5"} component={"h2"} sx={{ my: 3 }}>
                    Resumen de Amautapp
                </Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur, voluptatum atque nobis voluptate asperiores cupiditate eaque est, eos repellat delectus rem. Obcaecati quo, dolorum velit nostrum odio adipisci vero.
                </p>
                <Typography variant={"h5"} component={"h2"} sx={{ my: 3 }}>
                    Preguntas Frecuentes
                </Typography>

            </Container>
        </Layout>
    );
};

export default Soporte;
