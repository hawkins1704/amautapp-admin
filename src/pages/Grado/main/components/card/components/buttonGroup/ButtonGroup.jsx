import React from "react";
import styles from "./styles.module.css";
import { IconButton, Tooltip } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
    removeMateria,
    updateMateria,
} from "../../../../../../../services/materia";
import { RemoveModal } from "../modal";
const ButtonGroup = ({ gradoId, materiaId, data }) => {
    const navigate = useNavigate();
    const eliminarMateria = () => {
        removeMateria(gradoId, materiaId);
        navigate('/sincronizador'); //temporalmente ya que sino no actualiza los cursos
    };
    const editarMateria = () => {
        updateMateria(gradoId, materiaId, data);
    };
    /*Modal---- */
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    /*--------- */
    return (
        <div className={styles.buttonsContainer}>
            <Tooltip title="Editar Materia">
                <IconButton
                    variant="outlined"
                    onClick={editarMateria}
                    className={styles.button}
                >
                    <EditIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Borrar materia">
                <IconButton
                    variant="outlined"
                    onClick={handleOpen}
                    className={styles.button}
                >
                    <DeleteOutlineIcon />
                </IconButton>
            </Tooltip>
            <RemoveModal
            open={open}
            handleClose={handleClose}
            eliminarMateria={eliminarMateria}
            />
        </div>
    );
};

export default ButtonGroup;
