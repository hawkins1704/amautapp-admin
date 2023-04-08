import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import AddIcon from "@mui/icons-material/Add";
const Header = ({ title }) => {
    return (
        <Container maxWidth={"xl"} sx={{mb:3}}>
            <Grid container>
                <Grid item md={8}>
                    <Typography
                        variant={"h4"}
                        component={"h1"}
                        className={styles.title}
                    >
                        {title}
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <div className={styles.button}>
                        <Button variant="outlined" startIcon={<AddIcon />}>
                            Agregar materia
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;
