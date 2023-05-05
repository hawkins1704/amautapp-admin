import {
    Box,
    Button,
    FormControl,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { createMateria } from "../../../services/materia";
import {  TwitterPicker } from "react-color";

const AgregarMateria = ({ open, handleClose, gradoId }) => {
    const [materia, setMateria] = useState({
        nombre: "",
        color: "",
    });
    const handleChange = (e) => {
        setMateria({
            ...materia,
            [e.target.name]: e.target.value,
        });
    };
    const handleChangeColor = (color) => {
        setMateria({
            ...materia,
            color: color.hex,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createMateria(gradoId, materia.nombre, materia);
        handleClose();
    };

    // console.log("MATERIA: ", materia);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.modalContainer}>
                
                <Typography variant={"h5"} component={"h2"} sx={{ mb: 3 }}>
                    Agregar materia
                </Typography>
                <form onSubmit={handleSubmit} className={styles.form}>
                        <TextField
                            id="nombre"
                            name="nombre"
                            label="Nombre"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TwitterPicker
                            onChange={handleChangeColor}
                            width="100%"
                            color={materia.color}
                        />
                        <div className={styles.buttonContainer}>
                            <Button variant="text" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="contained" type="submit">
                                Agregar
                            </Button>
                        </div>
                </form>
            </Box>
        </Modal>
    );
};

export default AgregarMateria;
