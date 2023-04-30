import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";

const RemoveModal = ({ open, handleClose, eliminarMateria }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-describedby="modal-modal-description"
        >
            <div className={styles.modalContainer}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    Oh oh!
                </Typography>
                <Typography component="h3">
                    Estás por eliminar una materia, ¿estás seguro?
                </Typography>
                <div className={styles.buttonContainer}>
                    <Button variant="outlined" onClick={handleClose} disableElevation>
                        Cancelar
                    </Button>
                    <Button variant="contained" onClick={eliminarMateria} disableElevation>
                        Eliminar
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default RemoveModal;
