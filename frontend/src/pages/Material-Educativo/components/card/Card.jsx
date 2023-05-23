import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Card = ({ nombre, subtitle, color, icon, nombreInicial }) => {
    if (nombreInicial) {
        return (
            <Box
                className={styles.containerInicial}
                component={Link}
                to={nombreInicial}
            >
                
                    <img
                        src="/media/img/Material/sun.png"
                        alt=""
                        srcset=""
                        className={styles.imageInicial}
                    />
                    <img
                        src="/media/img/Material/cloud.png"
                        alt=""
                        srcset=""
                        className={styles.imageInicial}
                    />
                    <img
                        src="/media/img/Material/rainbow.png"
                        alt=""
                        srcset=""
                        className={styles.imageInicial}
                    />
                

                <Typography
                    variant={"h5"}
                    component={"h4"}
                    className={styles.title}
                >
                    {nombreInicial}
                </Typography>
            </Box>
        );
    } else {
        const contenido = nombre.split("-");
        return (
            <Box className={styles.container} component={Link} to={nombre} style={{background:color}}>
                <div className={styles.image}>{icon}</div>
                <Typography variant={"h2"} component={"h3"}>
                    {contenido[1]}°
                </Typography>
                <Typography
                    variant={"h5"}
                    component={"h4"}
                    className={styles.title}
                >
                    {contenido[0]}
                </Typography>
                <Typography variant={"h6"} component={"h5"}>
                    {subtitle}
                </Typography>
            </Box>
        );
    }
};

export default Card;