import {
    Box,
    Button,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { createCentroEducativo } from "../../../services/centroEducativo";

const AgregarCentro = ({ open, handleClose }) => {
    const [centroEducativo, setCentroEducativo] = useState({
        nombre: "",
    });
    const handleChange = (e) => {
        setCentroEducativo({
            ...centroEducativo,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("CENTRO EDUCATIVO: ", centroEducativo);
        createCentroEducativo(centroEducativo.nombre,centroEducativo)
        handleClose();
    };

    // console.log("Centro Educativo: ", centroEducativo);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.modalContainer}>
                
                <Typography variant={"h5"} component={"h2"} sx={{ mb: 3 }}>
                    Agregar centro educativo
                </Typography>
                <form onSubmit={handleSubmit} className={styles.form}>
                        <TextField
                            id="nombre"
                            name="nombre"
                            label="Nombre"
                            variant="outlined"
                            onChange={handleChange}
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

export default AgregarCentro;
