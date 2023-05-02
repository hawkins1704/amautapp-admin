import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    Input,
    InputLabel,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
    useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import imgLogo from "../../assets/logos/logo-1.png";
import { MyContext } from "../../providers/Context";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const { user, updateUser } = useContext(MyContext);
    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        userType: "admin",
    });
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
    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(formData);
        navigate('/')

    };
    console.log("USER:",user);
    console.log("USUARIO INGRESADO:",formData);
    return (
        <div className={styles.mainContainer}>
            <div container className={styles.contentContainer}>
                <div className={styles.imgContainer}>
                    <img
                        src={imgLogo}
                        alt=""
                        srcset=""
                        className={styles.image}
                    />
                </div>
                <div className={styles.formContainer}>
                    <Typography variant={"h4"} component={"h1"}>
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
                            id="email"
                            name="email"
                            label="Correo"
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
            </div>
            <ul className={styles.circles}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Login;
