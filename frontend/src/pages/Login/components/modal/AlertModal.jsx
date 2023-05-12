import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";

const AlertModal = ({ open, handleClose }) => {
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
                    Los datos que ingresaste son incorrectos
                </Typography>
                <div className={styles.buttonContainer}>
                    <Button variant="outlined" onClick={handleClose} disableElevation>
                        Reintentar
                    </Button>
                    
                </div>
            </div>
        </Modal>
    );
};

export default AlertModal;
