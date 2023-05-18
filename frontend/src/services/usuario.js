import { gun } from "../providers/Gun";
import { filterDuplicated } from "../utils";

import {
    getAllCentrosEducativosOnce,
    getCentroEducativo,
} from "./centroEducativo";

export const getAllDocentesSync = (centroEducativoId, setDocentes) => {
    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);
    fetchedCentroEducativo
        .get("docentes")
        .map()
        .on((data, key) => {
            setDocentes((prev) => {
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

export const logIn = (userType, email, password) => {
   console.log("ENTRE A LOGIN");
   
    switch (userType) {
        // eslint-disable-next-line no-lone-blocks
        case "alumno":
            // eslint-disable-next-line no-lone-blocks
            {
                return new Promise((resolve, reject) => {
                    const query = gun
                        .get("centros-educativos")
                        .map()
                        .get("alumnos")
                        .map()
                        .once((data, key) => {
                            console.log("Alumno: ", data);
                            if (data.email === email && data.password === password) {
                                
                                resolve(data);
                            }
                        });
                    query.off();
                });
            }
            break;
            case "docente":
                // eslint-disable-next-line no-lone-blocks
                {
                return new Promise((resolve, reject) => {
                    const query = gun
                        .get("centros-educativos")
                        .map()
                        .get("docentes")
                        .map()
                        .once((data, key) => {
                            console.log("Docente: ", data);
                            if (data.email === email && data.password === password) {
                                
                                resolve(data);
                            }
                        });
                    query.off();
                });
            }
            break;

        default:
            break;
    }
    // const fetchedUser=get(email)
};
