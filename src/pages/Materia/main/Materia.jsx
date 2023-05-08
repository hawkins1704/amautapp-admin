import React, { useEffect, useState } from "react";
import { Layout } from "../../../components";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { ButtonGroup, Table } from "./components";
import { getAllClasesFake } from "../../../services/fakeData";
import { getAllClasesSync } from "../../../services/clase";
const Materia = () => {
    const params = useParams();
    const materiaId = params.materiaId;
    const gradoId = params.gradoId;
    const gradoTitle = gradoId.replace("-", " ").concat("°");
    const title = materiaId;
    const [clases, setClases] = useState([]);
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
        <Link
            underline="hover"
            key="3"
            color="inherit"
            aria-current="page"
            component={RouterLink}
            to={`/material-educativo/${params.gradoId}`}
        >
            {gradoTitle}
        </Link>,
        <Typography key="4" color="text.primary">
            {title}
        </Typography>,
    ];

    useEffect(() => {
        const getInitialData = async () => {
            if (process.env.REACT_APP_ENVIRONMENT === "development") {
                getAllClasesSync(gradoId, materiaId, setClases);
            } else if (process.env.REACT_APP_ENVIRONMENT === "production") {
                //Temporalmente invertido para poder desplegar en netlify y ver fakeData
                const clases = await getAllClasesFake();
                setClases(clases);
            }
        };
        getInitialData();
    }, []);
    return (
        <Layout
            title={title}
            breadcrumbs={breadcrumbs}
            HeaderButtonGroup={() => <ButtonGroup />}
        >
            <Container maxWidth={"xl"}>
                <div className={styles.tableContainer}>
                    <Table rows={clases.length <= 0 ? [] : clases} />
                </div>
            </Container>
        </Layout>
    );
};

export default Materia;
