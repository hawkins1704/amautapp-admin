import React, { useContext, useEffect, useState }  from "react";
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
    Container
}from "@mui/material";
const Configuracion = () => {
    const { user, updateUser } = useContext(MyContext);
    
    const [email, setEmail] = useState(user.email);
    const [nombre, setNombre] = useState(user.email);
    const [ edad , setEdad] = useState(10);

    
     const handleChangeEmail = (event, newValue) => {
        setEmail(newValue);
     }
     const handleChangeNombre = (event, newValue) => {
        setNombre(newValue);
     }
     const handleChangeEdad = (event, newValue) => {
        setEdad(newValue);
     }
       const breadcrumbs = [
        <Typography key="2" color="text.primary">
            Configuración
        </Typography>,
    ];
    useEffect(() => {
        console.log(user.email);
    } , [])
    return (
        <Layout title={"Configuración"} breadcrumbs={breadcrumbs}>

            <Container maxWidth={"xl"}>
               
                
                <div className={styles.container}>
                <div className={styles.imagen}>
                </div>
                <form onSubmit={() => {}} className={styles.form}>
                     
                     <TextField
                         id="email"
                         name="email"
                         label="Email"
                         variant="outlined"
                         value={
                             email
                         }
                         onChange={handleChangeEmail} > </TextField>
                    
                     <TextField
                         id="nombre"
                         name="nombre"
                         label="Nombre"
                         variant="outlined"
                         value={nombre}
                         onChange={handleChangeNombre}
                     />
                 
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
                         onChange={ handleChangeEdad}
                         value={edad}
                     />
                    
                        
                 
                     <div className={styles.buttonContainer}>
                         <Button variant="contained" type="submit">
                             Guardar Cambios
                         </Button>
                     </div>
                 </form>
                </div>
              
                {/* Formulario para agregar información del alumno tendrá al iniciar data falsa y el docente tendr� al iniciar data falsa? */}
                

            </Container>
        </Layout>
    );
};

export default Configuracion;
