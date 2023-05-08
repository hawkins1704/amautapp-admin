import { filterDuplicated } from "../utils";
import { getCentroEducativo } from "./centroEducativo";

export const getAllDocentesSync = (centroEducativoId, setDocentes) => {
    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);
    fetchedCentroEducativo
        .get("docentes")
        .map()
        .on((data, key) => {

            setDocentes((prev) => {
                return filterDuplicated( [...prev, data].filter((val) => val !== null));
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
                return filterDuplicated( [...prev, data].filter((val) => val !== null));
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
