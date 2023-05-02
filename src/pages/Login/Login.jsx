import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
    useTheme,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.css";
const Login = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        user: "",
        password: "",
        userType: "admin",
    });
    const handleSubmit = () => {};
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const userTypeHandleChange = (e, type) => {
        setFormData({
            ...formData,
            userType: type,
        });
    };
    console.log("FORM DATA: ", formData);
    return (
        <Box
            className={styles.mainContainer}
            sx={{ background: theme.palette.background.default }}
        >
            <div className={styles.formContainer}>
                <Typography variant={"h5"} component={"h1"}>
                    Iniciar Sesión
                </Typography>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <ToggleButtonGroup
                        color="primary"
                        value={formData.userType}
                        exclusive
                        onChange={userTypeHandleChange}
                        aria-label="userType"
                        name="userType"
                    >
                        <ToggleButton value="admin">ADMIN</ToggleButton>
                        <ToggleButton value="docente">DOCENTE</ToggleButton>
                        <ToggleButton value="alumno">ALUMNO</ToggleButton>
                    </ToggleButtonGroup>
                    <TextField
                        id="user"
                        name="user"
                        label="Usuario"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <TextField
                        id="password"
                        name="password"
                        label="Contraseña"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <Button variant="contained" type="submit">
                        Iniciar Sesión
                    </Button>
                </form>
            </div>
        </Box>
    );
};

export default Login;
