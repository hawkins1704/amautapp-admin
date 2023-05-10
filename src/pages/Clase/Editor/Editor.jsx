import React, { useContext, useState } from "react";
import { Layout } from "../../../components";
import {
    Box,
    Button,
    Container,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import StarterKit from "@tiptap/starter-kit";
import { TextEditor } from "./components";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { createClase } from "../../../services/clase";
import { MyContext } from "../../../providers/Context";
import styles from './styles.module.css'
const Editor = () => {
    const params = useParams();
    const title = "Generador de clases";
    const gradoId = params.gradoId;
    const materiaId = params.materiaId;
    const gradoTitle = gradoId.replace("-", " ").concat("°");
    const { user } = useContext(MyContext);
    const [claseData, setClaseData] = useState({
        titulo: "",
        propietario: user.email,
        semana: 0,
        fechaCreacion: new Date().getTime(),
        fechaActualizacion: new Date().getTime(),
        contenido: "",
    });
    const navigate=useNavigate();
    const breadcrumbs = [
        <Link
            underline="hover"
            key="2"
            color="inherit"
            aria-current="page"
            component={RouterLink}
            to="/material-educativo"
        >
            Material Educativo
        </Link>,
        <Link
            underline="hover"
            key="3"
            color="inherit"
            aria-current="page"
            component={RouterLink}
            to={`/material-educativo/${gradoId}`}
        >
            {gradoTitle}
        </Link>,
        <Link
            underline="hover"
            key="3"
            color="inherit"
            aria-current="page"
            component={RouterLink}
            to={`/material-educativo/${gradoId}/${materiaId}`}
        >
            {materiaId}
        </Link>,
        <Typography key="4" color="text.primary">
            {title}
        </Typography>,
    ];
    const guardarClase = () => {
        createClase(gradoId,materiaId,claseData.titulo,claseData);
        navigate(-1);
    };
    const handleChangeEditor = (contenido) => {
        setClaseData({
            ...claseData,
            contenido: contenido,
        });
    };
    const handleChangeTitulo = (e) => {
        setClaseData({
            ...claseData,
            [e.target.name]: e.target.value,
        });
    };
    const handleChangeSemana = (e) => {
        setClaseData({
            ...claseData,
            [e.target.name]: parseInt(e.target.value),
        });
    };
    console.log("CLASE CREADA: ", claseData);
    return (
        <Layout title={title} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <Box sx={{ margin: "12px 0" }}>
                    <div className={styles.buttonContainer}>
                        <Button
                            variant="contained"
                            disableElevation
                            startIcon={<SaveOutlinedIcon />}
                            onClick={guardarClase}
                        >
                            Guardar clase
                        </Button>
                        <TextField
                            id="titulo"
                            name="titulo"
                            label="Titulo"
                            variant="outlined"
                            onChange={handleChangeTitulo}
                        />
                        <TextField
                            id="semana"
                            name="semana"
                            label="Semana"
                            variant="outlined"
                            type="number"
                            InputProps={{
                                inputProps: {
                                    max: 100,
                                    min: 0,
                                },
                            }}
                            onChange={handleChangeSemana}
                        />
                    </div>
                </Box>
                <TextEditor handleChangeEditor={handleChangeEditor} />
            </Container>
        </Layout>
    );
};

export default Editor;
