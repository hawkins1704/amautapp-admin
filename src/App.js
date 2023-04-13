import { Route, Routes } from "react-router-dom";
import Gun from "gun";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Configuracion } from "./pages/Configuracion";
import { Login } from "./pages/Login";
import { Profesores } from "./pages/Profesores";
import { CentrosEducativos } from "./pages/CentrosEducativos";
import { Soporte } from "./pages/Soporte";
import { Material } from "./pages/Material";
import { Grado } from "./pages/Grado/main";
import { AgregarMateria } from "./pages/Grado/agregarMateria";
import { ThemeProvider, createTheme } from "@mui/material";
import { Principal } from "./pages/Principal";
import { createContext, useContext, useEffect, useState } from "react";
const gun = Gun({
    //revisar como configurar para que se coloque direccion IP del profesor aquí de manera automática
    peers: [`${window.location.origin}/gun`, "http://192.168.1.111:8080/gun"], // Put the relay node that you want here
    localStorage: false,
});
const theme = createTheme({
    palette: {
        primary: {
            main: "#ff4400",
        },
    },
});
export const MyContext = createContext();
function App() {

   const [grados, setGrados] = useState([]);
   const fetchedGrados = gun.get("grados");

    useEffect(() => {
        var temp=[];
        fetchedGrados.map().once((data) => {
            temp.push(data);
        });
        setGrados(temp);
    }, []);

   
    return (
        <MyContext.Provider value={{grados: grados}}>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route index path="/" element={<Principal />} />
                    <Route path="material-educativo" element={<Material />} />
                    <Route path="material-educativo/:grado" element={<Grado />}>
                        <Route path="add" element={<AgregarMateria />} />
                    </Route>
                    <Route path="profesores" element={<Profesores />} />
                    <Route
                        path="centros-educativos"
                        element={<CentrosEducativos />}
                    />
                    <Route path="configuracion" element={<Configuracion />} />
                    <Route path="soporte" element={<Soporte />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </ThemeProvider>
        </MyContext.Provider>
    );
}

export default App;
