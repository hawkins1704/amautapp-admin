import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
const Header = ({ title, addIsOpen, setAddIsOpen }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const goToAgregarMateria = () => {
        if (addIsOpen == false) {
            navigate("add");
            setAddIsOpen(true);
        } else {
            setAddIsOpen(false);
            navigate(-1);
        }
    };
    return (
        <Container maxWidth={"xl"} sx={{ mb: 3 }}>
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
                        <IconButton
                            color="primary"
                            variant="outlined"
                            sx={{
                                border: `2px solid ${theme.palette.primary.main}`,
                            }}
                            onClick={goToAgregarMateria}
                        >
                            <AddIcon />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;
