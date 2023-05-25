import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../components";
import { Container, Link, Typography } from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { getAllAlumnosFake, getAllDocentesFake } from "../../services/fakeData";
import styles from "./styles.module.css";
import { TablaAlumnos, TablaDocentes } from "./components";
import { getAllAlumnosSync, getAllDocentesSync } from "../../services/usuario";
import { MyContext } from "../../providers/Context";

const MiCentroEducativo = () => {
    const { user } = useContext(MyContext);

    
    const [alumnos, setAlumnos] = useState([]);
    const [docentes, setDocentes] = useState([]);
    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            {user.centroEducativoId}
        </Typography>,
    ];
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
            getAllDocentesSync(user.centroEducativoId, setDocentes);
            getAllAlumnosSync(user.centroEducativoId, setAlumnos);
        };
        getInitialData();
    }, []);
  
    return (
        <Layout title={"Mi centro educativo"} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                {docentes.length > 0 ? (
                    <div className={styles.tableContainer}>
                        <TablaAlumnos
                            rows={alumnos}
                            centroEducativoId={user.centroEducativoId}
                        />
                    </div>
                ) : (
                    <div>No existen datos en la tabla de docentes</div>
                )}
                {alumnos.length > 0 ? (
                    <div className={styles.tableContainer}>
                        <TablaDocentes
                            rows={docentes}
                            centroEducativoId={user.centroEducativoId}
                        />
                    </div>
                ) : (
                    <div>No existen datos en la tabla de alumnos</div>
                )}
            </Container>
        </Layout>
    );
};

export default MiCentroEducativo;
