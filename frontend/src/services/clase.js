import { capitalize, filterDuplicated } from "../utils";
import { getGrado } from "./grado";
import { getMateria } from "./materia";
import { gun } from "../providers/Gun";

export const getAllClasesSync = (gradoId, materiaId, setClases) => {
    // const fetchedMateria = getMateria(gradoId, materiaId);
    gun.get("grados").get(gradoId)
    .get("materias").get(materiaId.toLowerCase())
        .get("clases")
        .map()
        .on((data, key) => {
            console.log("DATA: ",data);
            setClases((prev) => {
                return filterDuplicated(
                    [...prev, data].filter((val) => val !== null)
                );
            });
        });
};

export const createClase = (gradoId, materiaId, claseId, data) => {
    console.log("clase service: ",materiaId);
    // const fetchedMateria=getMateria(gradoId,materiaId);
    gun.get("grados").get(gradoId)
    .get("materias").get(materiaId.toLowerCase()).get("clases").get(claseId).put(data);
};

export const removeClase = (gradoId, materiaId, claseId) => {
    // const fetchedMateria = getMateria(gradoId, materiaId);
    gun.get("grados").get(gradoId)
    .get("materias").get(materiaId.toLowerCase()).get("clases").get(claseId).put(null);
};
