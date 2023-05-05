import { Route, Routes } from "react-router-dom";
import { Configuracion } from "./pages/Configuracion";
import { Login } from "./pages/Login";
import { CentrosEducativos } from "./pages/CentrosEducativos/main";
import { Soporte } from "./pages/Soporte";
import { Material } from "./pages/Material-Educativo";
import { Grado } from "./pages/Grado/main";
import { AgregarMateria } from "./pages/Grado/Agregar-Materia";
import { ThemeProvider, createTheme } from "@mui/material";
import { Principal } from "./pages/Principal";
import { Materia } from "./pages/Materia/main";
import { Editor } from "./pages/Clase/Editor";
import { Clase } from "./pages/Clase/main";
import "./App.module.css";
import { MyContext } from "./providers/Context";
import { useContext } from "react";
import { MiCentroEducativo } from "./pages/MiCentroEducativo";
import { CentroEducativo } from "./pages/CentroEducativo/main";
const theme = createTheme({
    palette: {
        background: {
            default: "#F8F8F8",
        },
        primary: {
            main: "#FF0505",
            light: "#FCB000",
        },
        secondary: {
            main: "#F8B44C",
        },
    },
    components: {
        // Name of the component ⚛️
        MuiButtonBase: {
            defaultProps: {
                // The props to apply
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
    },
});

const Router = () => {
    const { user, updateUser } = useContext(MyContext);
    console.log("USUARIO EN ROUTER: ", user);
    return (
        <ThemeProvider theme={theme}>
            {user ? (
                <Routes>
                    <Route index path="/" element={<Principal />} />
                    <Route path="material-educativo" element={<Material />} />
                    <Route
                        path="material-educativo/:gradoId"
                        element={<Grado />}
                    />
                    <Route
                        path="material-educativo/:gradoId/:materiaId"
                        element={<Materia />}
                    />
                    <Route
                        path="material-educativo/:gradoId/:materiaId/:claseId"
                        element={<Clase />}
                    />
                    <Route
                        path="material-educativo/:gradoId/:materiaId/editor"
                        element={<Editor />}
                    />
                    {user.userType === "admin" ? (
                        <>
                            <Route
                                path="centros-educativos"
                                element={<CentrosEducativos />}
                            />
                            <Route
                                path="centros-educativos/:centroEducativoId"
                                element={<CentroEducativo />}
                            />
                        </>
                    ) : user.userType === "docente" ? (
                        <Route
                            path="mi-centro-educativo"
                            element={<MiCentroEducativo />}
                        />
                    ) : null}
                    <Route path="configuracion" element={<Configuracion />} />
                    <Route path="soporte" element={<Soporte />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="*" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            )}
        </ThemeProvider>
    );
};

export default Router;
