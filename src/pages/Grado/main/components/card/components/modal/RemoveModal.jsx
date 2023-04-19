import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const RemoveModal = ({ open, handleClose, eliminarMateria }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Estás por eliminar una materia, ¿estás seguro?
                </Typography>
                <Button variant="contained" onClick={eliminarMateria}>Eliminar</Button>
                <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
            </Box>
        </Modal>
    );
};

export default RemoveModal;
