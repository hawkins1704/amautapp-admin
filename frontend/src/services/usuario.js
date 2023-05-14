import { filterDuplicated } from "../utils";
import { getCentroEducativo } from "./centroEducativo";

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

export const createAlumno = (
    centroEducativoId,
    nombreAlumno,
    apellidoAlumno,
    data
) => {
    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);
    const alumnoId = nombreAlumno + apellidoAlumno;
    return fetchedCentroEducativo.get("alumnos").get(alumnoId).put(data);
};

export const createDocente = (
    centroEducativoId,
    nombreDocente,
    apellidoDocente,
    data
) => {
    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);
    const docenteId = nombreDocente + apellidoDocente;
    return fetchedCentroEducativo.get("docentes").get(docenteId).put(data);
};

export const removeAlumno = (
    centroEducativoId,
    nombreAlumno,
    apellidoAlumno
) => {
    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);
    const alumnoId = nombreAlumno + apellidoAlumno;
    return fetchedCentroEducativo.get("alumnos").get(alumnoId).put(null);
};

export const removeDocente = (
    centroEducativoId,
    nombreDocente,
    apellidoDocente
) => {
    const fetchedCentroEducativo = getCentroEducativo(centroEducativoId);
    const docenteId = nombreDocente + apellidoDocente;
    return fetchedCentroEducativo.get("docente").get(docenteId).put(null);
};
