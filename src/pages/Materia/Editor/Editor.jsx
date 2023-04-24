import React from 'react'
import { Layout } from '../../../components';
import { Container, Link, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from "react-router-dom";
import StarterKit from '@tiptap/starter-kit'
import { TextEditor } from './components';

const Editor = () => {
    const params = useParams();
    const title = 'Editor de texto';
    const gradoId = params.gradoId;
    const gradoTitle = gradoId.replace("-", " ").concat("°");

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
            to={`/material-educativo/${params.gradoId}`}
        >
            {gradoTitle}
        </Link>,
        <Typography key="4" color="text.primary">
            {title}
        </Typography>,
    ];

   
  return (
    <Layout title={title} breadcrumbs={breadcrumbs}>
        <Container maxWidth={"xl"}>
        <TextEditor/>
        </Container>
    </Layout>
  )
}

export default Editor;