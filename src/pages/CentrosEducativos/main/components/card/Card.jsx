import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { ButtonGroup } from "./components";

const Card = ({ nombre, color, icon, isOptionsOpen, data }) => {
    console.log("Tipo de variable color: ", typeof color);

    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                {isOptionsOpen ? (
                    <ButtonGroup
                        centroEducativoId={nombre}
                        data={data} //Necesita form con nuevos datos
                    />
                ) : null}
            </div>
            <div
                className={styles.textContainer}
            >
                <Box component={Link} to={nombre}>
                    <div className={styles.image}>{icon}</div>
                    <Typography
                        variant={"h5"}
                        component={"h4"}
                        className={styles.title}
                    >
                        {nombre}
                    </Typography>
                </Box>
            </div>
        </div>
    );
};

export default Card;
