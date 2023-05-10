import React, { useEffect } from "react";
import { Layout } from "../../components";
import { Container, Grid } from "@mui/material";
import styles from "./styles.module.css";
import { Card } from "./components";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";

const Principal = () => {
    useEffect(() => {
        const createData = () => {};
        createData();
    }, []);

    return (
        <Layout title={"Principal"} breadcrumbs={[]} isPrincipal>
            <div
                className={styles.banner}
                style={{
                    background: 'url("/media/img/Banner.png")',
                    width: "100%",
                    height: "30vh",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                }}
            ></div>
            <Container maxWidth={"xl"} sx={{ py: 3 }}>
                <Grid container spacing={3}>
                    <Grid item md xs={12}>
                        <Card
                            nombre={"Material educativo"}
                            color={"#0F6D5F"}
                            to={"material-educativo"}
                            icon={<MenuBookRoundedIcon />}
                        />
                    </Grid>
                    <Grid item md xs={12}>
                        <Card
                            nombre={"Centros educativos"}
                            color={"#CE5353"}
                            to={"centros-educativos"}
                            icon={<SchoolRoundedIcon />}
                        />
                    </Grid>
                    <Grid item md xs={12}>
                        <Card
                            nombre={"Configuración"}
                            color={"#E59C2E"}
                            to={"configuracion"}
                            icon={<SettingsRoundedIcon />}
                        />
                    </Grid>
                    <Grid item md xs={12}>
                        <Card
                            nombre={"Ayuda y soporte"}
                            color={"#2A8DD5"}
                            to={"soporte"}
                            icon={<SupportAgentRoundedIcon />}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Principal;
