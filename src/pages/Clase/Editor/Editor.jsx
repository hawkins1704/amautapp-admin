import React, { useState } from "react";
import { Layout } from "../../../components";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import StarterKit from "@tiptap/starter-kit";
import { TextEditor } from "./components";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
const Editor = () => {
    const params = useParams();
    const title = "Generador de clases";
    const gradoId = params.gradoId;
    const materiaId = params.materiaId;
    const gradoTitle = gradoId.replace("-", " ").concat("°");
    const [claseData, setClaseData] = useState({
        titulo: "",
        propietario: "",
        semana: "",
        fechaCreacion: "",
        fechaActualizacion: "",
        contenido: "",
    });
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
    const guardarClase=()=>{
        
    }
    return (
        <Layout title={title} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <Box sx={{ margin: "12px 0" }}>
                    <Button
                        variant="contained"
                        disableElevation
                        startIcon={<SaveOutlinedIcon />}
                        onClick={guardarClase}
                    >
                        Guardar clase
                    </Button>
                </Box>
                <TextEditor />
            </Container>
        </Layout>
    );
};

export default Editor;
