import React, { useContext } from "react";
import { Layout } from "../../components";
import { Container, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Card } from "./components";
import styles from "./styles.module.css";
import { MyContext } from "../../App";
const Material = () => {
    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Material Educativo
        </Typography>,
    ];
    const {grados} = useContext(MyContext);
    const gradosOrdenados=grados.sort((a,b)=>a.key-b.key);
    console.log("GRADOS OBTENIDOS EN MATERIAL: ", grados);
    console.log("GRADOS ORDENADOS: ", gradosOrdenados);
    return (
        <Layout title={"Material Educativo"} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <Container maxWidth={"xl"} sx={{ my: 6 }}>
                    <Typography variant={"h5"} component={"h2"} sx={{ my: 3 }}>
                        Primaria
                    </Typography>
                    <Grid container spacing={3}>
                        {gradosOrdenados.slice(0, 6).map((e) => (
                            <Grid item md={4} xs={12}>
                                <Card key={e.key} name={e.name} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container maxWidth={"xl"} sx={{ my: 6 }}>
                    <Typography variant={"h5"} component={"h2"} sx={{ my: 3 }}>
                        Secundaria
                    </Typography>
                    <Grid container spacing={3}>
                        {gradosOrdenados.slice(6, 12).map((e) => (
                            <Grid item md={4} xs={12}>
                                <Card key={e.key} name={e.name} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
        </Layout>
    );
};

export default Material;
