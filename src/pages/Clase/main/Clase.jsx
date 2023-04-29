import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../../../components";
import { Link as RouterLink, useLocation, useParams } from "react-router-dom";
import { Container, Link, Typography } from "@mui/material";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import './EditorStyles.css'
const Clase = () => {
    const params = useParams();
    const location=useLocation();
    const title = params.claseId;
    const gradoId = params.gradoId;
    const materiaId = params.materiaId;
    const gradoTitle = gradoId.replace("-", " ").concat("°");
    const contenido=location.state.contenido;

    const editor = useEditor({
        editable:false,
        extensions: [StarterKit,
            Image.configure({
                allowBase64: true,
                HTMLAttributes: {
                    class: "image",
                },
            }),],
        content: contenido,
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
    console.log();
    return (
        <Layout title={title} breadcrumbs={breadcrumbs}>
            <Container maxWidth="xl">
                <EditorContent editor={editor}/>
            </Container>
        </Layout>
    );
};

export default Clase;
