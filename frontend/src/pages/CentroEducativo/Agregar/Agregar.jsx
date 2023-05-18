import {
    Box,
    Button,
    MenuItem,
    Modal,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material";
import "dayjs/locale/en-gb";
import "dayjs/locale/es";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { createCentroEducativo } from "../../../services/centroEducativo";
import { createAlumno, createDocente } from "../../../services/usuario";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
const Agregar = ({ open, handleClose, centroEducativoId }) => {
    const [userType, setUserType] = useState("alumno");
    const [alumno, setAlumno] = useState({
        nombre: "",
        apellido: "",
        fechaNacimiento: 0,
        edad: 0,
        grado: 0,
        email: "",
        password: "",
        userType: "alumno",
    });
    const [docente, setDocente] = useState({
        nombre: "",
        apellido: "",
        fechaNacimiento: 0,
        email: "",
        password: "",
        userType: "docente",
    });

    const grados = [
        {
            value: 1,
            label: "1° Primaria",
        },
        {
            value: 2,
            label: "2° Primaria",
        },
        {
            value: 3,
            label: "3° Primaria",
        },
        {
            value: 4,
            label: "4° Primaria",
        },
        {
            value: 5,
            label: "5° Primaria",
        },
        {
            value: 6,
            label: "6° Primaria",
        },
        //Pendiente SECUNDARIA, para lo cual hay que cambiar el value de Number a String
    ];

    const handleChangeAlumno = (e) => {
        setAlumno({
            ...alumno,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeFechaNacimiento = (value) => {
        const fechaMilisegundos = value.$d.getTime();

        if (userType === "alumno") {
            const edad = new Date().getFullYear() - value.$d.getFullYear();
            // console.log("EDAD: ", edad);
            setAlumno({
                ...alumno,
                fechaNacimiento: fechaMilisegundos,
                edad: edad,
            });
        } else {
            setDocente({
                ...docente,
                fechaNacimiento: fechaMilisegundos,
            });
        }
    };
    const handleChangeNumero = (e) => {
        if (userType === "alumno") {
            setAlumno({
                ...alumno,
                [e.target.name]: parseInt(e.target.value),
            });
        } else {
            setDocente({
                ...docente,
                [e.target.name]: parseInt(e.target.value),
            });
        }
    };
    const handleSubmitAlumno = (e) => {
        e.preventDefault();
        createAlumno(
            centroEducativoId,
            alumno.nombre.toLowerCase() +
                alumno.apellido.toLowerCase() +
                "-a@test.com",
            {
                ...alumno,
                email:
                    alumno.nombre.toLowerCase() +
                    alumno.apellido.toLowerCase() +
                    "-a@test.com",
                password: alumno.nombre.toLowerCase() + "123",
            }
        );
        handleClose();
    };

    const handleChangeDocente = (e) => {
        setDocente({
            ...docente,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitDocente = (e) => {
        e.preventDefault();
        createDocente(
            centroEducativoId,
            docente.nombre.toLowerCase() +
                docente.apellido.toLowerCase() +
                "-d@test.com",
            {
                ...docente,
                email:
                    docente.nombre.toLowerCase() +
                    docente.apellido.toLowerCase() +
                    "-d@test.com",
                password: docente.nombre.toLowerCase() + "123",
            }
        );
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.modalContainer}>
                <Typography variant={"h5"} component={"h2"} sx={{ mb: 3 }}>
                    Agregar {userType}
                </Typography>
                {userType === "alumno" ? (
                    <form onSubmit={handleSubmitAlumno} className={styles.form}>
                        <ToggleButtonGroup
                            color="primary"
                            value={userType}
                            exclusive
                            onChange={(e, type) => setUserType(type)}
                            aria-label="userType"
                            name="userType"
                        >
                            <ToggleButton value="docente">DOCENTE</ToggleButton>
                            <ToggleButton value="alumno">ALUMNO</ToggleButton>
                        </ToggleButtonGroup>
                        <TextField
                            id="nombre"
                            name="nombre"
                            label="Nombre"
                            variant="outlined"
                            onChange={handleChangeAlumno}
                        />
                        <TextField
                            id="apellido"
                            name="apellido"
                            label="Apellido"
                            variant="outlined"
                            onChange={handleChangeAlumno}
                        />
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            adapterLocale={"es"}
                        >
                            <DatePicker
                                label="Fecha de nacimiento"
                                name
                                onChange={(value) =>
                                    handleChangeFechaNacimiento(value)
                                }
                            />
                        </LocalizationProvider>
                        <TextField
                            id="edad"
                            name="edad"
                            label="Edad"
                            variant="outlined"
                            type="number"
                            InputProps={{
                                inputProps: {
                                    max: 100,
                                    min: 0,
                                },
                            }}
                            onChange={handleChangeNumero}
                            value={alumno.edad}
                        />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Grado"
                            defaultValue="1"
                            onChange={handleChangeAlumno}
                            name="grado"
                        >
                            {grados.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <div className={styles.buttonContainer}>
                            <Button variant="text" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="contained" type="submit">
                                Agregar
                            </Button>
                        </div>
                    </form>
                ) : (
                    <form
                        onSubmit={handleSubmitDocente}
                        className={styles.form}
                    >
                        <ToggleButtonGroup
                            color="primary"
                            value={userType}
                            exclusive
                            onChange={(e, type) => setUserType(type)}
                            aria-label="userType"
                            name="userType"
                        >
                            <ToggleButton value="docente">DOCENTE</ToggleButton>
                            <ToggleButton value="alumno">ALUMNO</ToggleButton>
                        </ToggleButtonGroup>
                        <TextField
                            id="nombre"
                            name="nombre"
                            label="Nombre"
                            variant="outlined"
                            onChange={handleChangeDocente}
                        />
                        <TextField
                            id="apellido"
                            name="apellido"
                            label="Apellido"
                            variant="outlined"
                            onChange={handleChangeDocente}
                        />
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            adapterLocale={"es"}
                        >
                            <DatePicker
                                label="Fecha de nacimiento"
                                name
                                onChange={(value) =>
                                    handleChangeFechaNacimiento(value)
                                }
                            />
                        </LocalizationProvider>
                        <div className={styles.buttonContainer}>
                            <Button variant="text" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="contained" type="submit">
                                Agregar
                            </Button>
                        </div>
                    </form>
                )}
            </Box>
        </Modal>
    );
};

export default Agregar;
