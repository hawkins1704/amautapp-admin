import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../components";
import styles from "./styles.module.css";
import { MyContext } from "../../providers/Context";

import {
    Button,
    MenuItem,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
    Container,
    Grid,
} from "@mui/material";
const Configuracion = () => {
    const { user, updateUser } = useContext(MyContext);

    const [userForm, setUserForm] = useState(user);

    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Configuración
        </Typography>,
    ];
    useEffect(() => {
        console.log(user.email);
    }, []);
    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <Layout title={"Configuración"} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <Grid container spacing={6}>
                    <Grid item sm={12} md={6}>
                        <div className={styles.messageContainer}>
                            <p>
                                Hola! Aquí podrás ver tu información y podrás
                                editarla si así lo deseas. Recuerda que si eres
                                alumno no olvides en avisarle primero a tu
                                profesor que realizarás un cambio para que esté
                                al tanto
                            </p>
                            <img
                                src="/media/img/Configuracion/message.png"
                                alt="imagen de configuracion"
                            />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Grid container spacing={4}>
                            <Grid item sm={12}>
                                <Grid container className={styles.idContainer}>
                                    <Grid item sm={12} md={4}>
                                        <div className={styles.imgContainer}>
                                            <img
                                                src="/media/img/Configuracion/teacherProfile.png"
                                                alt=""
                                                srcset=""
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item sm={12} md={8}>
                                        <div className={styles.dataContainer}>
                                            <div className="">
                                                <p>NOMBRE: {userForm.nombre}</p>
                                                <p>
                                                    APELLIDO:{" "}
                                                    {userForm.apellido}
                                                </p>
                                                <p>USUARIO: {userForm.email}</p>
                                                <p>
                                                    CONTRASEÑA:{" "}
                                                    {userForm.password}
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={12}>
                                <form
                                    onSubmit={() => {}}
                                    className={styles.form}
                                >
                                    <div className="">
                                        <TextField
                                            id="nombre"
                                            name="nombre"
                                            label="Nombre"
                                            variant="outlined"
                                            value={userForm.nombre}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            id="apellido"
                                            name="apellido"
                                            label="Apellido"
                                            variant="outlined"
                                            value={userForm.apellido}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="">
                                        <TextField
                                            id="email"
                                            name="email"
                                            label="Usuario"
                                            variant="outlined"
                                            value={userForm.email}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            id="password"
                                            name="password"
                                            label="Contraseña"
                                            variant="outlined"
                                            value={userForm.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={styles.buttonContainer}>
                                        <Button
                                            variant="contained"
                                            type="submit"
                                        >
                                            Guardar Cambios
                                        </Button>
                                    </div>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Configuracion;
