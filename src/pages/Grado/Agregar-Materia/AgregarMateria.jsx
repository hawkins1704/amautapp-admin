import {
    Button,
    Container,
    FormControl,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { createMateria } from "../../../services/materia";
import { useOutletContext } from "react-router-dom";

const AgregarMateria = () => {
    const {gradoId}= useOutletContext();
    const [materia, setMateria] = useState({
        nombre:'',
    });
    const handleChange=(e)=>{
        setMateria({
            [e.target.name]:e.target.value,
        })
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        createMateria(gradoId,materia.nombre,materia);
    }


    return (
        <Container maxWidth={"xl"}>
            <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                    <div className={styles.formContainer}>
                        <Typography
                            variant={"h5"}
                            component={"h2"}
                            sx={{ mb: 3 }}
                        >
                            Agregar Materia
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <FormControl className={styles.form}>
                                <TextField
                                    id="nombre"
                                    name="nombre"
                                    label="Nombre"
                                    variant="outlined"
                                    onChange={handleChange}
                                />
                                <Button
                                    variant="outlined"
                                    startIcon={<AddIcon />}
                                    type="submit"
                                >
                                    Agregar
                                </Button>
                            </FormControl>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AgregarMateria;
