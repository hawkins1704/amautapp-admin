import { Route, Routes } from "react-router-dom";
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
    );
}

export default App;
