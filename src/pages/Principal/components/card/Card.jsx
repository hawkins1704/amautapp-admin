import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Card = ({ nombre }) => {
    
    
    return (
        <Box className={styles.container} component={Link} to={nombre} >
                <Typography variant={"h5"} component={"h4"} className={styles.title}>
                    {nombre}
                </Typography>
        </Box>
    );
};

export default Card;
