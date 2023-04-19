import React, { useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Container, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ButtonGroup, Card } from "./components";

import styles from "./styles.module.css";
import { Layout } from "../../../components";
import { getAllMateriasSync } from "../../../services/materia";
import { filterDuplicated } from "../../../utils";

const Grado = () => {
    const params = useParams();
    const gradoId = params.grado;
    const title = gradoId.replace("-", " ").concat("°");
    const [addIsOpen, setAddIsOpen] = useState(false);
    const [materias, setMaterias] = useState([]);
    const breadcrumbs = [
        <Link
            underline="hover"
            key="2"
            color="inherit"
            aria-current="page"
            component={RouterLink}
            to="/material-educativo"
        >
            Material Educativo
        </Link>,
        <Typography key="3" color="text.primary">
            {title}
        </Typography>,
    ];

    useEffect(() => {
        getAllMateriasSync(gradoId, setMaterias);
    }, []);

    return (
        <Layout
            title={title}
            breadcrumbs={breadcrumbs}
            HeaderButtonGroup={() => (
                <ButtonGroup
                    addIsOpen={addIsOpen}
                    setAddIsOpen={setAddIsOpen}
                />
            )}
        >
            <Outlet context={{ gradoId }} />
            <Container maxWidth={"xl"} sx={{ my: 6 }}>
                <Grid container spacing={3}>
                    {filterDuplicated(materias).map((e) => (
                        <Grid item md={4} xs={12}>
                            <Card
                                gradoId={gradoId}
                                materia={e}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Layout>
    );
};

export default Grado;
