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
            getAllClasesSync(gradoId, materiaId, setClases);
        };
        getInitialData();
    }, []);
    console.log("CLASES RECIBIDAS: ", clases);
    return (
        <Layout
            title={title}
            breadcrumbs={breadcrumbs}
            HeaderButtonGroup={() => <ButtonGroup />}
        >
            <Container maxWidth={"xl"}>
                <div className={styles.tableContainer}>
                    <Table
                        rows={clases.length <= 0 ? [] : clases}
                        gradoId={gradoId}
                        materiaId={materiaId}
                    />
                </div>
            </Container>
        </Layout>
    );
};

export default Materia;
