import { capitalize, filterDuplicated } from "../utils";
import { getGrado } from "./grado";
import { getMateria } from "./materia";
import { gun } from "../providers/Gun";
export const getAllClasesSync = (gradoId, materiaId, setClases) => {
    const fetchedMateria = getMateria(gradoId, capitalize(materiaId));
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
    console.log("service clase - gradoId: ",gradoId);
    console.log("service clase - materiaId: ",capitalize(materiaId));
    console.log("service clase - claseId: ",claseId);
    console.log("service clase - data: ",data);
    const fetchedMateria=getMateria(gradoId,capitalize(materiaId));
    return fetchedMateria.get("clases").get(claseId).put(data);
};

export const removeMateria = (gradoId, materiaId, claseId) => {
    const fetchedMateria = getMateria(gradoId, materiaId);
    fetchedMateria.get("clases").get(claseId).put(null);
};
