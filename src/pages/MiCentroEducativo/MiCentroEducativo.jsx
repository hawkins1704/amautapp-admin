import React from "react";
import styles from "./styles.module.css";
import { Layout } from "../../components";
import { Container, Typography } from "@mui/material";

const MiCentroEducativo = () => {
    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Mi Centro Educativo
        </Typography>,
    ];
    return (
        <Layout title={"Mi centro educativo"} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <div>MiCentroEducativo</div>
            </Container>
        </Layout>
    );
};

export default MiCentroEducativo;
