import { getCentroEducativo } from "./centroEducativo";


export const createAlumno = (centroEducativoId, alumnoId, data) => {
    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);
    return fetchedCentroEducativo.get("alumnos").get(alumnoId).put(data);
};


export const createDocente = (centroEducativoId, docenteId, data) => {
    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);
    return fetchedCentroEducativo.get("docentes").get(docenteId).put(data);
};