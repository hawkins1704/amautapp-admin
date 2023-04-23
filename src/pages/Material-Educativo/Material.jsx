import React, {  useEffect, useState } from "react";
import { Layout } from "../../components";
import { Container, Grid, Typography } from "@mui/material";
import { Card } from "./components";

import { getAllGradosOnce } from "../../services/grado";
import { sortArrayASC } from "../../utils";
import { getAllGradosFake } from "../../services/fakeData";
const Material = () => {
    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Material Educativo
        </Typography>,
    ];

    const [grados, setGrados] = useState([]);

    useEffect(() => {
        // getAllGradosOnce(setGrados);

        //fake data temporal
        getAllGradosFake(setGrados);
    }, []);
    return (
        <Layout title={"Material Educativo"} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <Container maxWidth={"xl"} sx={{ my: 6 }}>
                    <Typography variant={"h5"} component={"h2"} sx={{ my: 3 }}>
                        Primaria
                    </Typography>
                    <Grid container spacing={3}>
                        {sortArrayASC(grados).slice(0, 6).map((e) => (
                            <Grid item md={4} xs={12}>
                                <Card key={e.key} nombre={e.nombre} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container maxWidth={"xl"} sx={{ my: 6 }}>
                    <Typography variant={"h5"} component={"h2"} sx={{ my: 3 }}>
                        Secundaria
                    </Typography>
                    <Grid container spacing={3}>
                        {sortArrayASC(grados).slice(6, 12).map((e) => (
                            <Grid item md={4} xs={12}>
                                <Card key={e.key} nombre={e.nombre} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
        </Layout>
    );
};

export default Material;
