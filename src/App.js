
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes } from "react-router-dom";
import { Configuracion } from "./pages/Configuracion";
import { Login } from "./pages/Login";
import { Profesores } from "./pages/Profesores";
import { CentrosEducativos } from "./pages/CentrosEducativos";
import { Soporte } from "./pages/Soporte";
import { Material } from "./pages/Material-Educativo";
import { Grado } from "./pages/Grado/main";
import { AgregarMateria } from "./pages/Grado/Agregar-Materia";
import { ThemeProvider, createTheme } from "@mui/material";
import { Principal } from "./pages/Principal";
import { Materia } from "./pages/Materia/main";
import { Editor } from "./pages/Materia/Editor";

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
                    <Route path="material-educativo/:gradoId" element={<Grado />}>
                        <Route path="add" element={<AgregarMateria />} />
                    </Route>
                    <Route path="material-educativo/:gradoId/:materiaId" element={<Materia />} />
                    <Route path="material-educativo/:gradoId/:materiaId/editor" element={<Editor />} />
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
