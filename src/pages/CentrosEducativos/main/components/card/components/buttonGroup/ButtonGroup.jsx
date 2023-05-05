import React from "react";
import styles from "./styles.module.css";
import { IconButton, Tooltip } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import RemoveModal from "../modal/RemoveModal";
import { removeCentroEducativo, updateCentroEducativo } from "../../../../../../../services/centroEducativo";
const ButtonGroup = ({ centroEducativoId, data }) => {
    const navigate = useNavigate();
    const eliminarCentroEducativo = () => {
        removeCentroEducativo(centroEducativoId);
        navigate('/material-educativo'); //temporalmente ya que sino no actualiza los cursos
    };
    const editarCentroEducativo = () => {
        updateCentroEducativo(centroEducativoId, data);
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
                    onClick={editarCentroEducativo}
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
            eliminarMateria={eliminarCentroEducativo}
            />
        </div>
    );
};

export default ButtonGroup;
