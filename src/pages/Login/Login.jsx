import {
    Button,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
} from "@mui/material";
import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
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
                <div className={styles.formContainer}>
                <img
                        src='/media/logo/logo-1.png'
                        alt=""
                        srcset=""
                        className={styles.image}
                    />
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
                            label="Usuario"
                            variant="outlined"
                            onChange={handleChange}
                            sx={{width:'100%'}}
                        />
                        <TextField
                            id="password"
                            name="password"
                            label="Contraseña"
                            type="password"
                            variant="outlined"
                            onChange={handleChange}
                            sx={{width:'100%'}}
                        />
                        <Button variant="contained" type="submit" sx={{width:'100%'}}>
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
