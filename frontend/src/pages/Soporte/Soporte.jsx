import React from "react";
import { Layout } from "../../components";
import { Container, Typography,Accordion,AccordionSummary,AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Soporte = () => {
    const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Ayuda y Soporte
        </Typography>,
    ];
    return (
        <Layout title={"Soporte"} breadcrumbs={breadcrumbs}>
            <Container maxWidth={"xl"}>
                <Typography variant={"h5"} component={"h2"} sx={{ my: 3 }}>
                    Acerca de Amautapp
                </Typography>
                <p>
                Amautapp es una plataforma educativa descentralizada con sincronización automática de contenidos curriculares. Amautapp permite a los docentes poder acceder a una gran cantidad de material educativo disponible según grado académico y según curso sin necesidad de tener una conectividad a internet estable. Además, tendrán disponible una biblioteca digital a la cual podrán acceder para obtener información variada. Sumado a esto, tanto administradores de la plataforma como docentes serán capaces de crear contenido digital para su propio uso, así como para otros docentes.
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
                    Somos Renzo Arroyo Andrade y Daniel Echegaray Apac,  dos estudiantes de la carrera de Ingeniería de Software de la Universidad Peruana de Ciencias Aplicadas. Nos hemos unido con el objetivo de crear una plataforma que permita llevar un contenido educativo de calidad a los estudiantes en cualquier parte del Perú sin importar en donde se encuentren. Juntos, estamos trabajando arduamente para lograr este objetivo y estamos entusiasmados de contribuir al futuro de la educación en el Perú rompiendo la brecha digital que existe actualmente.
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
                    Para crear una nueva clase sigue estos sencillos pasos: En la sección de 'Material Educativo', selecciona el grado al que pertenece tu clase. Luego, elige la materia a la que pertenece la clase. Una vez que hayas seleccionado la materia, verás la opción de 'Crear Clase'. Haz clic en esa opción y llena la información requerida, como el título de la clase, la semana a la que pertenece y el contenido.Hax clic en guardar ¡Y listo! Tu clase se habrá creado y estará lista para ser usada y compartida con tus estudiantes.
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
                    ¿Es necesario tener una buena conexión a internet para poder usar la plataforma?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    No! Puedes usar la plataforma así dispongas de poco o nada de internet! No es genial? La conectividad a internet únicamente es necesaria para sincronizar contenido nuevo con el contenido que tú tienes, sin embargo si no dispones de internet puedes acceder al contenido que se encuentra en tu equipo.
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
                    La plataforma funciona de tal manera que, cuando dispone de conectividad o se encuentra cerca de algún equipo verifica si hay contenido nuevo y automáticamente se sincroniza. De igual manera, si creaste contenido nuevo, dicho contenido se queda guardado en tu equipo para que puedas usarlo cuando sea necesario y en el momento en que dispongas de conexión o te encuentres cerca de algún equipo automáticamente la plataforma sincronizará dicho contenido con el de otro equipo.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Quisiera hablar con uno de los creadores de la plataforma ¿Cómo podría comunicarme con ellos?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    La plataforma está diseñada y desarrollada por dos alumnos de la Universidad Peruana de Ciencias Aplicadas: Renzo Arroyo Andrade y Daniel Echegaray Apac. Si deseas comunicarte con ellos te recomendamos enviar un correo electrónico a cualquiera de las siguientes cuentas: renzoarroyo09@gmail.com - daniel_inmaculada@hotmail.com.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </Layout>
    );
};

export default Soporte;
