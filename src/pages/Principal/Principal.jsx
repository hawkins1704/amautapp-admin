import React from "react";
import { Layout } from "../../components";
import { Container } from "@mui/material";

const Principal = () => {
    return (
        <Layout title={"Principal"} breadcrumbs={[]}>
            <Container maxWidth={"xl"}>
                <div>Principal</div>
            </Container>
        </Layout>
    );
};

export default Principal;
