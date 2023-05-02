import React from "react";
import { Layout } from "../../components";
import { Container, Typography,Accordion,AccordionSummary,AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Soporte = () => {
    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Soporte
        </Typography>,
    ];
    return (
        <Layout title={"Soporte"} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <Typography variant={"h5"} component={"h2"} sx={{ my: 3 }}>
                    Resumen de Amautapp
                </Typography>
                <p>
                AmautApp es una plataforma educativa diseñada para proporcionar a los estudiantes contenido de calidad en cualquier parte del Perú. Nuestros cursos interactivos están diseñados para hacer el aprendizaje más práctico y accesible, brindando a nuestros alumnos una experiencia educativa de alto nivel.
                </p>
                <Typography variant={"h5"} component={"h2"} sx={{ my: 3 }}>
                    Preguntas Frecuentes
                </Typography>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>¿Quienes Somos?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    En la Universidad Peruana de Ciencias Aplicadas, somos un equipo de estudiantes comprometidos con mejorar la educación en todo el país. Nos hemos unido con el objetivo de llevar la educación a más estudiantes peruanos y hacer una diferencia real en la calidad de la enseñanza. Juntos, estamos trabajando arduamente para lograr este objetivo y estamos entusiasmados de contribuir al futuro de la educación en el Perú.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>¿Dónde puedo crear una clase para mis alumnos?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    Para crear una nueva clase en nuestra plataforma, sigue estos sencillos pasos. En la sección de 'Material Educativo', selecciona el grado al que pertenece tu clase. Luego, elige la materia que deseas enseñar. Una vez que hayas seleccionado la materia, verás la opción de 'Crear Clase'. Haz clic en esa opción y llena la información requerida, como el título de la clase y una breve descripción. ¡Y listo! Tu clase se habrá creado y estará lista para ser vista por tus estudiantes en nuestra plataforma educativa.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Quisiera hablar con uno de los creadores de la app por problemas mayores. ¿Cómo podría comunicarme con ellos?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    Si necesita comunicarse con ellos, le recomendamos enviar un correo electrónico a las cuentas universitarias de los alumnos respectivos: u201811483@upc.edu.pe y u201618307@upc.edu.pe. Por favor, incluya el motivo de su consulta en el correo para que puedan responderle de manera efectiva. Estarán encantados de ayudarlo en lo que necesite.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>
                    ¿Es necesario tener una buena conexión a internet para utilizar al máximo las funciones de la app?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    No es necesario, porque la plataforma esta diseñada para crear y compartir las clases interactivas entre los usuarios bajo una misma red local. Sin embargo si desea tener los cursos del servidor es necesario si descargarlos de internet.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>
                    ¿Si otro docente o un administrador de la aplicación sube una clase, automáticamente mi contenido se sincroniza?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    Sí, el único requisito es que ambos dispositivos se encuentren en la misma red local para poder compartir el contenido de los cursos. Esto es importante porque al estar en la misma red, se garantiza una conexión más rápida y estable entre los dispositivos, lo que permite una transmisión de datos más fluida y una mejor experiencia de usuario para aquellos que están utilizando el contenido del curso. ¡Asegurarse de que ambos dispositivos estén en la misma red local es fácil y garantiza que todos puedan disfrutar al máximo del contenido de nuestros cursos!
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </Layout>
    );
};

export default Soporte;
