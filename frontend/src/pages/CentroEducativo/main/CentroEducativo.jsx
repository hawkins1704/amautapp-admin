import React, { useEffect, useState } from "react";
import { Layout } from "../../../components";
import { Container, Link, Typography } from "@mui/material";
import {
    Link as RouterLink,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {
    getAllAlumnosFake,
    getAllDocentesFake,
} from "../../../services/fakeData";
import styles from "./styles.module.css";
import { ButtonGroup, TablaAlumnos, TablaDocentes } from "./components";
import { Agregar } from "../Agregar";
import {
    getAllAlumnosSync,
    getAllDocentesSync,
} from "../../../services/usuario";
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

    /*Para poder cargar la lista de elementos de tabla completa */
    const navigate = useNavigate();
    const location = useLocation();
    const props = location.state ?? false;
    /*--------------------------------------------------------- */
    useEffect(() => {
        const redirectToOtherComponent = async () => {
            // await new Promise((resolve) => setTimeout(resolve, 5));
            navigate("/loader");
            await new Promise((resolve) => setTimeout(resolve, 2000)); //Depende de la data
            navigate(location.pathname, { state: { hasRedirected: true } });
        };
        if (!props.hasRedirected) {
            redirectToOtherComponent();
        }
    }, [navigate, location]);
    useEffect(() => {
        const getInitialData = async () => {
            getAllDocentesSync(centroEducativoId, setDocentes);
            getAllAlumnosSync(centroEducativoId, setAlumnos);
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
                    {
                        docentes.length > 0 ? (
                            <TablaDocentes
                                rows={docentes}
                                centroEducativoId={centroEducativoId}
                            />
                        ) : (
                            <div>No existen datos en la tabla de docentes</div>
                        ) //Temporal
                    }
                </div>

                <div className={styles.tableContainer}>
                    {
                        alumnos.length > 0 ? (
                            <TablaAlumnos
                                rows={alumnos}
                                centroEducativoId={centroEducativoId}
                            />
                        ) : (
                            <div>No existen datos en la tabla de alumnos</div>
                        ) //Temporal
                    }
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
