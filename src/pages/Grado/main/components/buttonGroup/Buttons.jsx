import React from "react";
import styles from "./styles.module.css";
import { Button, IconButton, Tooltip,ButtonGroup  } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
const Buttons = ({ handleOpen,isOptionsOpen,setIsOptionsOpen }) => {
    
    const showEditOptions=()=>{
        setIsOptionsOpen(!isOptionsOpen)
    }

    return (
        <div className={styles.buttonsContainer}>
            <ButtonGroup
                aria-label="outlined primary button group"
                disableElevation
            >
                <Button startIcon={<EditIcon/>} onClick={showEditOptions}>Editar</Button>
                <Button startIcon={<AddIcon/>} onClick={handleOpen}>Agregar</Button>
            </ButtonGroup>
        </div>
    );
};

export default Buttons;
