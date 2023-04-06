import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Gun from "gun";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Home } from "./pages/Home";
import { Configuracion } from "./pages/Configuracion";
const gun = Gun({
    //revisar como configurar para que se coloque direccion IP del profesor aquí de manera automática
    peers: [`${window.location.origin}/gun`,"http://192.168.1.111:8080/gun"], // Put the relay node that you want here
    localStorage:false,
});

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/notificaciones' element={<Configuracion/>}/>
            <Route path='/material-educativo' element={<Configuracion/>}/>
            <Route path='/secciones' element={<Configuracion/>}/>
            <Route path='/configuracion' element={<Configuracion/>}/>
            <Route path='/soporte' element={<Configuracion/>}/>
            <Route path='/login' element={<Configuracion/>}/>
        </Routes>
    );
}

export default App;
