import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Container, Grid, Typography } from "@mui/material";
import { Card } from "./components";

import { getAllGradosOnce, getAllGradosSync } from "../../services/grado";
import { sortArrayASC } from "../../utils";
import { getAllGradosFake } from "../../services/fakeData";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import { useLocation, useNavigate } from "react-router-dom";

const Material = () => {
    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Material Educativo
        </Typography>,
    ];

    const [grados, setGrados] = useState([]);

    useEffect(() => {
        getAllGradosSync(setGrados);
    }, []);
     /*Para poder cargar la lista de elementos de tabla completa */
     const navigate = useNavigate();
     const location = useLocation();
    const props=location.state??false;
     /*--------------------------------------------------------- */
    useEffect(() => {
       
        const redirectToOtherComponent = async () => {
            // await new Promise((resolve) => setTimeout(resolve, 50)); en prueba
            navigate("/loader");
            await new Promise((resolve) => setTimeout(resolve, 2000)); //Depende de la data
            navigate(location.pathname,{state:{hasRedirected:true}});
        };
        if (!props.hasRedirected) {
           
            redirectToOtherComponent();
        }
    }, [navigate,location]);

    console.log("GRADOS RECIBIDOS: ", grados);

    return (
        <Layout title={"Material Educativo"} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <Container maxWidth={"xl"} sx={{ my: 6 }}>
                    <Typography variant={"h5"} component={"h2"} sx={{ my: 3 }}>
                        Inicial
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
                            <Card
                                nombreInicial={"inicial"}
                                color="#E59C2E"
                                icon={<MenuBookRoundedIcon />}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth={"xl"} sx={{ my: 6 }}>
                    <Typography variant={"h5"} component={"h2"} sx={{ my: 3 }}>
                        Primaria
                    </Typography>

                    <Grid container spacing={3}>
                        {sortArrayASC(grados)
                            .slice(0, 6)
                            .map((e) => (
                                <Grid item md={4} xs={12}>
                                    <Card
                                        key={e.key}
                                        nombre={e.nombre}
                                        color="#c4ebec"
                                        icon={<MenuBookRoundedIcon />}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </Container>
                {/* <Container maxWidth={"xl"} sx={{ my: 6 }}>
                    <Typography variant={"h5"} component={"h2"} sx={{ my: 3 }}>
                        Secundaria
                    </Typography>
                    <Grid container spacing={3}>
                        {sortArrayASC(grados)
                            .slice(6, 11)
                            .map((e) => (
                                <Grid item md={4} xs={12}>
                                    <Card
                                        key={e.key}
                                        nombre={e.nombre}
                                        color="#c4e1ec"
                                        icon={<MenuBookRoundedIcon />}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </Container> */}
            </Container>
        </Layout>
    );
};

export default Material;
