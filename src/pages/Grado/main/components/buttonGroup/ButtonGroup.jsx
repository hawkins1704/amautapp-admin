import React from "react";
import styles from './styles.module.css';
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
const ButtonGroup = ({handleOpen}) => {
    const theme = useTheme();
    return (
        <div className={styles.buttonsContainer}>
            <Tooltip title="Editar Contenido" >
                <IconButton
                    color="primary"
                    variant="outlined"
                    sx={{
                        border: `2px solid ${theme.palette.primary.main}`,
                    }}
                    onClick={handleOpen}
                    className={styles.button}
                >
                    <EditIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Agregar materia" >
                <IconButton
                    color="primary"
                    variant="outlined"
                    sx={{
                        border: `2px solid ${theme.palette.primary.main}`,
                    }}
                    onClick={handleOpen}
                    className={styles.button}
                >
                    <AddIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default ButtonGroup;
