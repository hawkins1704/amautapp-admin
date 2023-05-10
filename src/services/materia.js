import { useNavigate } from "react-router-dom";
import { gun } from "../providers/Gun";
import { getGrado } from "./grado";
import { filterDuplicated } from "../utils";

export const getAllMateriasSync = (gradoId, setMaterias) => {
    const fetchedGrado = getGrado(gradoId);
    fetchedGrado
        .get("materias")
        .map()
        .on((data, key) => {
            setMaterias((prev) => {
                return filterDuplicated( [...prev, data].filter((val) => val !== null));
            });
        });
};
export const getAllMateriasOnce = (gradoId, setMaterias) => {
    const fetchedGrado = getGrado(gradoId);
    fetchedGrado
        .get("materias")
        .map()
        .once((data) => {
            setMaterias((prev) => [...prev, data]).filter((val) => val !== null);
        });
};
export const getMateria = (gradoId, materiaId) => {
    //Si está creada la obtiene, si no la crea
    const fetchedGrado = getGrado(gradoId);
    return fetchedGrado.get("materias").get(materiaId);
};
export const createMateria = (gradoId, materiaId, data) => {
    console.log("service materia - gradoId: ",gradoId);
    console.log("service materia - materiaId: ",materiaId);
    console.log("service materia - data: ",data);
    const fetchedGrado = getGrado(gradoId);
    return fetchedGrado.get("materias").get(materiaId).put(data);
};

export const updateMateria = (gradoId, materiaId, data) => {
    const fetchedGrado = getGrado(gradoId);
    return fetchedGrado.get("materias").get(materiaId).put(data);
};
export const removeMateria = (gradoId, materiaId) => {
    const fetchedGrado = getGrado(gradoId);
    fetchedGrado.get("materias").get(materiaId).put(null);
};
