import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Container, Link, Typography } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import { getAllAlumnosFake, getAllDocentesFake } from "../../services/fakeData";
import styles from "./styles.module.css";
import { TablaAlumnos, TablaDocentes } from "./components";
const CentroEducativo = () => {
    const params = useParams();
    const centroEducativoId = params.centroEducativoId;
    const title = centroEducativoId;

    const [alumnos, setAlumnos] = useState([]);
    const [docentes, setDocentes] = useState([]);
    const breadcrumbs = [
        <Link
            underline="hover"
            key="3"
            color="inherit"
            aria-current="page"
            component={RouterLink}
            to={`/centros-educativos`}
        >
            Centros Educativos
        </Link>,
        <Typography key="3" color="text.primary">
            {title}
        </Typography>,
    ];

    useEffect(() => {
        const getInitialData = async () => {
            if (process.env.REACT_APP_ENVIRONMENT === "development") {
                //getAllDocentesSync(centroEducativoId, setDocentes);
                //getAllAlumnosSync(centroEducativoId, setAlumnos);
            } else if (process.env.REACT_APP_ENVIRONMENT === "production") {
                //Temporalmente invertido para poder desplegar en netlify y ver fakeData
                const alumnos = await getAllAlumnosFake(centroEducativoId);
                const docentes = await getAllDocentesFake(centroEducativoId);
                setAlumnos(alumnos);
                setDocentes(docentes);
            }
        };
        getInitialData();
    }, []);
    console.log("ALUMNOS: ",alumnos);
    return (
        <Layout title={centroEducativoId} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                {alumnos.length <= 0 ? (
                    <div>Cargando</div>
                ) : (
                    <div className={styles.tableContainer}>
                        <TablaDocentes rows={docentes} />
                    </div>
                )}
                {docentes.length <= 0 ? (
                    <div>Cargando</div>
                ) : (
                    <div className={styles.tableContainer}>
                        <TablaAlumnos rows={alumnos} />
                    </div>
                )}
            </Container>
        </Layout>
    );
};

export default CentroEducativo;
