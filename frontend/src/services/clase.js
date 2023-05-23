import { capitalize, filterDuplicated } from "../utils";
import { getGrado } from "./grado";
import { getMateria } from "./materia";
import { gun } from "../providers/Gun";
export const getAllClasesSync = (gradoId, materiaId, setClases) => {
    const fetchedMateria = getMateria(gradoId, materiaId);
    fetchedMateria
        .get("clases")
        .map()
        .on((data, key) => {
            setClases((prev) => {
                return filterDuplicated(
                    [...prev, data].filter((val) => val !== null)
                );
            });
        });
};

export const createClase = (gradoId, materiaId, claseId, data) => {
    console.log("clase service: ",materiaId);
    const fetchedMateria=getMateria(gradoId,materiaId);
    return fetchedMateria.get("clases").get(claseId).put(data);
};

export const removeClase = (gradoId, materiaId, claseId) => {
    const fetchedMateria = getMateria(gradoId, materiaId);
    fetchedMateria.get("clases").get(claseId).put(null);
};