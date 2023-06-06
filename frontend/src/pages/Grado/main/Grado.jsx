import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Container, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ButtonGroup, Card } from "./components";

import styles from "./styles.module.css";
import { Layout } from "../../../components";
import { getAllMateriasSync } from "../../../services/materia";
import { geAllMateriasFake } from "../../../services/fakeData";
import AgregarMateria from "../Agregar-Materia/AgregarMateria";

const Grado = () => {
    const params = useParams();
    const gradoId = params.gradoId;
    const title = gradoId.replace("-", " ").concat("°");
  
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
    /*-----for Header Buttons----- */
    const [open, setOpen] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
     /*--------------------------- */
    useEffect(() => {
            getAllMateriasSync(gradoId, setMaterias);
    }, []);
    console.log("MATERIAS RECIBIDAS: ", materias);
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
    return (
        <Layout
            title={title}
            breadcrumbs={breadcrumbs}
            HeaderButtonGroup={() => (
                <ButtonGroup
                    handleOpen={handleOpen}
                    isOptionsOpen={isOptionsOpen}
                    setIsOptionsOpen={setIsOptionsOpen}
                />
            )}
        >
            {/* <Outlet context={{ gradoId }} /> */}
            <Container maxWidth={"xl"} sx={{ my: 6 }}>
                <Grid container spacing={3}>
                    {materias.map((e) => (
                        <Grid item md={4} xs={12}>
                            <Card
                                gradoId={gradoId}
                                materia={e}
                                isOptionsOpen={isOptionsOpen}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <AgregarMateria
                open={open}
                handleClose={handleClose}
                gradoId={gradoId}
            />
        </Layout>
    );
};

export default Grado;
