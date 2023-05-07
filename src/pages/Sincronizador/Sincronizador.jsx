import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
const Sincronizador = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(-1);
        }, 2000);
    }, []);

    return (
        <Layout title={""}>
            <Container maxWidth="xl" sx={{ my: 6 }} >
                <div className={styles.container}>
                    <Typography variant={"h4"} component={"h1"} className={styles.title}>
                        Sincronizando...
                    </Typography>
                    <div className={styles.center}>
                        <div className={styles.wave}></div>
                        <div className={styles.wave}></div>
                        <div className={styles.wave}></div>
                        <div className={styles.wave}></div>
                        <div className={styles.wave}></div>
                        <div className={styles.wave}></div>
                        <div className={styles.wave}></div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Sincronizador;
