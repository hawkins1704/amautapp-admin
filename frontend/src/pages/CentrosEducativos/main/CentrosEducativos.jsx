import React, { useEffect, useState } from "react";
import { Layout } from "../../../components";
import { Container, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { Card, ButtonGroup } from "./components";
import { getAllCentrosEducativosFake } from "../../../services/fakeData";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { AgregarCentro } from "../Agregar-Centro";
import { getAllCentrosEducativosOnce, getAllCentrosEducativosSync } from "../../../services/centroEducativo";


const CentrosEducativos = () => {
    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Centros Educativos
        </Typography>,
    ];
    const [centrosEducativos, setCentrosEducativos] = useState([]);

    /*-----for Header Buttons----- */
    const [open, setOpen] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    /*--------------------------- */
    useEffect(() => {
        const getInitialData = async () => {
                getAllCentrosEducativosOnce(setCentrosEducativos);
        };
        getInitialData();
    }, []);
    // console.log("CENTROS EDUCATIVOS: ", centrosEducativos);
    return (
        <Layout
            title={"Centros Educativos"}
            breadcrumbs={breadcrumbs}
            HeaderButtonGroup={() => (
                <ButtonGroup
                    handleOpen={handleOpen}
                    isOptionsOpen={isOptionsOpen}
                    setIsOptionsOpen={setIsOptionsOpen}
                />
            )}
        >
            <Container maxWidth={"xl"}>
                <Container maxWidth={"xl"} sx={{ my: 6 }}>
                    <Grid container spacing={3}>
                        {centrosEducativos.map((e) => (
                            <Grid item md={4} xs={12}>
                                <Card
                                    key={e.key}
                                    nombre={e.nombre}
                                    color="#E59C2E"
                                    icon={<SchoolRoundedIcon />}
                                    isOptionsOpen={isOptionsOpen}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
            <AgregarCentro
                open={open}
                handleClose={handleClose}
            />
        </Layout>
    );
};

export default CentrosEducativos;
