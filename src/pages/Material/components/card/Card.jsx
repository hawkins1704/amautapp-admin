import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Card = ({ ultra, title, subtitle }) => {
    return (
        <div className={styles.container}>
            <Link to={`${title.toLowerCase()}-${ultra.slice(0,1)}`}>
                <Typography variant={"h2"} component={"h3"}>
                    {ultra}
                </Typography>
                <Typography variant={"h5"} component={"h4"} >
                    {title}
                </Typography>
                <Typography variant={"h6"} component={"h5"}>
                    {subtitle}
                </Typography>
            </Link>
        </div>
    );
};

export default Card;
