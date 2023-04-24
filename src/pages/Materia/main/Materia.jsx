import React, { useEffect, useState } from "react";
import { Layout } from "../../../components";
import { Container, Link, Typography } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { Table } from "./components";
import { getAllClasesFake } from "../../../services/fakeData";
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
        // getAllClases(materiaId, setClases);
        const getInitialData=async()=>{
            const clases=await getAllClasesFake();
            setClases(clases);
        }
        getInitialData();
    }, []);
    console.log("CLASES: ",clases[2]);
    return (
        <Layout title={title} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>

                <Table rows={clases}/>
            </Container>
            
        </Layout>
    );
};

export default Materia;
