import React from "react";
import styles from './styles.module.css';
import { Button, ButtonGroup } from "@mui/material";
import BrushIcon from '@mui/icons-material/Brush';
import { useNavigate } from "react-router-dom";
const Buttons = () => {
    const navigate = useNavigate();
    const goToEditor = () => {
        navigate('editor')
    };
    return (
        <div className={styles.buttonsContainer}>
            
            <ButtonGroup
                aria-label="outlined primary button group"
                disableElevation
            >
                <Button startIcon={<BrushIcon/>} onClick={goToEditor}>Crear clase</Button>
            </ButtonGroup>
        </div>
    );
};

export default Buttons;
