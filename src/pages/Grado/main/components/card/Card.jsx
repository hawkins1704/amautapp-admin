import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { ButtonGroup } from "./components";

const Card = ({ gradoId,materia, data}) => {
    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <ButtonGroup
                    gradoId={gradoId}
                    materiaId={materia.nombre}
                    data={data}//Necesita form con n
                    uevos datos
                 
                />
            </div>
            <div className={styles.textContainer}>
                <Link to={`${materia.nombre.toLowerCase()}`}>
                    <Typography variant={"h5"} component={"h4"}>
                        {materia.nombre}
                    </Typography>
                </Link>
            </div>
        </div>
    );
};

export default Card;
