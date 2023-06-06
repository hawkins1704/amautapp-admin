import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Container, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
const Loader = () => {
    return (
        <Layout title={""}>
            <Container maxWidth="xl" sx={{ my: 6 }}>
                <div className={styles.container}>
                    
                    <div className={styles.center}>
                        <div className={styles.loader}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Loader;
