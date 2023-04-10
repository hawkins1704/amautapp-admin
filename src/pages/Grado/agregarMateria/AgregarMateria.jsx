import {
    Button,
    Container,
    FormControl,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import styles from "./styles.module.css";
const AgregarMateria = () => {
    return (
        <Container maxWidth={"xl"} >
            <Grid container spacing={3}>
                <Grid item md={4} xs={12} className={styles.formContainer}>
                    <Typography variant={"h5"} component={"h2"} sx={{ mb: 3 }}>
                        Agregar Materia
                    </Typography>
                    <FormControl className={styles.form}>
                        <TextField
                            id="nombre"
                            label="Nombre"
                            variant="outlined"
                        />
                        <Button variant="outlined" startIcon={<AddIcon />}>
                            Agregar
                        </Button>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AgregarMateria;
