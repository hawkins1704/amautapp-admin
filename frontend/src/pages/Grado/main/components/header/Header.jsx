import {
    Breadcrumbs,
    Button,
    Container,
    Grid,
    IconButton,
    Typography,
    Link,
    Tooltip,
} from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from '@mui/icons-material/Edit';

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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
    const breadcrumbs = [
        <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            key="1"
            color="inherit"
            component={RouterLink}
            to="/"
        >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Principal
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            aria-current="page"
            component={RouterLink}
            to="/material-educativo"
        >
            Material Educativo
        </Link>,
        <Typography key="3" color="text.primary">
            {title}
        </Typography>,
    ];
    return (
        <Container maxWidth={"xl"} sx={{ mb: 3 }}>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Typography
                        variant={"h4"}
                        component={"h1"}
                        className={styles.title}
                    >
                        {title}
                    </Typography>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={styles.buttonContainer}>
                        <Tooltip
                            title="Editar Contenido"
                            className={styles.tooltip}
                        >
                            <IconButton
                                color="primary"
                                variant="outlined"
                                sx={{
                                    border: `2px solid ${theme.palette.primary.main}`,
                                }}
                                onClick={goToAgregarMateria}
                                className={styles.button}
                            >
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip
                            title="Agregar materia"
                            className={styles.tooltip}
                        >
                            <IconButton
                                color="primary"
                                variant="outlined"
                                sx={{
                                    border: `2px solid ${theme.palette.primary.main}`,
                                }}
                                onClick={goToAgregarMateria}
                                className={styles.button}
                            >
                                <AddIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;
