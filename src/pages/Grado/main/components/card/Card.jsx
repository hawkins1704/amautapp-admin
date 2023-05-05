import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { ButtonGroup } from "./components";

const Card = ({ gradoId, materia,isOptionsOpen, data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                {isOptionsOpen?
                <ButtonGroup
                gradoId={gradoId}
                materiaId={materia.nombre}
                data={data} //Necesita form con nuevos datos
                />:null
            }
            </div>
            <div
                className={styles.textContainer}
                style={{ backgroundColor: `${materia.color}` }}
            >
                <Box component={Link} to={`${materia.nombre.toLowerCase()}`}>
                    <Typography variant={"h5"} component={"h4"}>
                        {materia.nombre}
                    </Typography>
                </Box>
            </div>
        </div>
    );
};

export default Card;
