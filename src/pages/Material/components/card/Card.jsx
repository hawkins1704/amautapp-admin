import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Card = ({ name,subtitle }) => {
    const contenido=name.split('-');
    return (
        <div className={styles.container}>
            <Link to={name}>
                <Typography variant={"h2"} component={"h3"}>
                    {contenido[1]}°
                </Typography>
                <Typography variant={"h5"} component={"h4"} className={styles.title}>
                    {contenido[0]}
                </Typography>
                <Typography variant={"h6"} component={"h5"}>
                    {subtitle}
                </Typography>
            </Link>
        </div>
    );
};

export default Card;
