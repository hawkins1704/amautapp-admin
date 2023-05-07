import React, { useEffect, useState } from "react";
import { Layout } from "../../../components";
import { Container, Link, Typography } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
    getAllAlumnosFake,
    getAllDocentesFake,
} from "../../../services/fakeData";
import styles from "./styles.module.css";
import { ButtonGroup, TablaAlumnos, TablaDocentes } from "./components";
import { Agregar } from "../Agregar";
import { getAllAlumnosSync, getAllDocentesSync } from "../../../services/usuario";
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

    /*-----for Header Buttons----- */
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    /*--------------------------- */

    useEffect(() => {
        const getInitialData = async () => {
            if (process.env.REACT_APP_ENVIRONMENT === "development") {
                getAllDocentesSync(centroEducativoId, setDocentes);
                getAllAlumnosSync(centroEducativoId, setAlumnos);
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
    return (
        <Layout
            title={centroEducativoId}
            breadcrumbs={breadcrumbs}
            HeaderButtonGroup={() => <ButtonGroup handleOpen={handleOpen} />}
        >
            <Container maxWidth={"xl"}>
               
                    <div className={styles.tableContainer}>
                        <TablaDocentes rows={docentes.length <= 0 ?[]:docentes} />
                    </div>
              
                    <div className={styles.tableContainer}>
                        <TablaAlumnos rows={alumnos.length <= 0 ?[]:alumnos} />
                    </div>
            </Container>
            <Agregar
                open={open}
                handleClose={handleClose}
                centroEducativoId={centroEducativoId}
            />
        </Layout>
    );
};

export default CentroEducativo;
