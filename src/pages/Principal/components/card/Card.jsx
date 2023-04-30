import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Card = ({ nombre, color, to, icon }) => {
    return (
        <Box
            className={styles.container}
            component={Link}
            to={to}
            sx={{ background: color }}
        >
            <Typography
                variant={"h5"}
                component={"h4"}
                className={styles.title}
            >
                <div className={styles.image}>{icon}</div>

                {nombre}
            </Typography>
        </Box>
    );
};

export default Card;
