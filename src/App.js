import { Route, Routes } from "react-router-dom";
import Gun from "gun";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Home } from "./pages/Home";
import { Configuracion } from "./pages/Configuracion";
import { Login } from "./pages/Login";
import { Profesores } from "./pages/Profesores";
import { Secciones } from "./pages/Secciones";
import { Soporte } from "./pages/Soporte";
import { Material } from "./pages/Material";
import { Grado } from "./pages/Grado";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
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
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="material-educativo" element={<Material />} />
                <Route path="material-educativo/:grado" element={<Grado />} />
                <Route path="profesores" element={<Profesores />} />
                <Route path="secciones" element={<Secciones />} />
                <Route path="configuracion" element={<Configuracion />} />
                <Route path="soporte" element={<Soporte />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
