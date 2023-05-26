import { gun } from "../providers/Gun";
import { filterDuplicated } from "../utils";

import {
    getAllCentrosEducativosOnce,
    getCentroEducativo,
} from "./centroEducativo";

export const getAllDocentesSync = (centroEducativoId, setDocentes) => {
    const id = "San Pedro";
    if (centroEducativoId === id) {
        console.log("son iguales");
    }
    console.log("CENTRO EDUCATIVO ID:", centroEducativoId);

    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);

    fetchedCentroEducativo
        .get("docentes")
        .map()
        .on((data, key) => {
            console.log("DATA: ", data);
            setDocentes((prev) => {
                // console.log("GETTING DOCENTES: ",data);
                return filterDuplicated(
                    [...prev, data].filter((val) => val !== null)
                );
            });
        });
};

export const getAllAlumnosSync = (centroEducativoId, setAlumnos) => {
    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);
    fetchedCentroEducativo
        .get("alumnos")
        .map()
        .on((data, key) => {
            setAlumnos((prev) => {
                return filterDuplicated(
                    [...prev, data].filter((val) => val !== null)
                );
            });
        });
};

export const createAlumno = (centroEducativoId, alumnoId, data) => {
    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);
    return fetchedCentroEducativo.get("alumnos").get(alumnoId).put(data);
};

export const createDocente = (centroEducativoId, docenteId, data) => {
    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);
    console.log("DOCENTE:", data);
    return fetchedCentroEducativo.get("docentes").get(docenteId).put(data);
};

export const removeAlumno = (centroEducativoId, alumnoId) => {
    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);
    return fetchedCentroEducativo.get("alumnos").get(alumnoId).put(null);
};

export const removeDocente = (centroEducativoId, docenteId) => {
    // console.log("CENTRO EDUCATIVO ID RECIBIDO EN SERVICE: ", centroEducativoId);
    // console.log("DOCENTE ID RECIBIDO EN SERVICE: ", docenteId);
    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);
    return fetchedCentroEducativo.get("docentes").get(docenteId).put(null);
};
let userArray = [];
let query=null;
export const logIn = async (userType, email, password) => {
    console.log("ARREGLO ENTRANDO EN LOGIN: ", userArray);
    switch (userType) {
        // eslint-disable-next-line no-lone-blocks
        case "alumno":
            // eslint-disable-next-line no-lone-blocks
            {
                query=gun.get("centros-educativos")
                    .map()
                    .get("alumnos")
                    .map()
                    .once((data, key) => {
                        console.log("DATA: ", data);
                        userArray = [...userArray, data];
                        console.log("user array: ", userArray);
                        userArray = filterDuplicated(
                            userArray.filter((val) => val !== null)
                        );
                    });
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const fetchedUser = userArray.find(
                            (user) =>
                                user.email === email &&
                                user.password === password
                        );
                        console.log("USUARIO ENCONTRADO: ", fetchedUser);
                        if (fetchedUser) {
                            // Usuario válido
                            console.log("Inicio de sesión exitoso");
                            resolve(fetchedUser);
                        } else {
                            // Usuario inválido
                            resolve(null);
                        }
                    }, 2000);
                });
            }
            break;
        case "docente":
            // eslint-disable-next-line no-lone-blocks
            {
                query= gun.get("centros-educativos")
                    .map()
                    .get("docentes")
                    .map()
                    .once((data, key) => {
                        console.log("DATA: ", data);
                        userArray = [...userArray, data];
                        console.log("user array: ", userArray);
                        userArray = filterDuplicated(
                            userArray.filter((val) => val !== null)
                        );
                    });
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const fetchedUser = userArray.find(
                            (user) =>
                                user.email === email &&
                                user.password === password
                        );
                        console.log("USUARIO ENCONTRADO: ", fetchedUser);
                        if (fetchedUser) {
                            // Usuario válido
                            console.log("Inicio de sesión exitoso");
                            resolve(fetchedUser);
                        } else {
                            // Usuario inválido
                            resolve(null);
                        }
                    }, 2000);
                });
            }
            break;

        default:
            break;
    }
    // const fetchedUser=get(email)
};
