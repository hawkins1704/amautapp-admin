import React, { useEffect, useState } from "react";
import { Layout } from "../../../components";
import { Link, Typography } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { Table } from "./components";
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
    }, []);

    return (
        <Layout title={title} breadcrumbs={breadcrumbs}>
            <div className={styles.tableContainer}>
                <Table />
            </div>
        </Layout>
    );
};

export default Materia;
