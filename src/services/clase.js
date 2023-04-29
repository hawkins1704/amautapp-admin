import { getGrado } from "./grado";
import { getMateria } from "./materia";
export const getAllClasesSync = (gradoId,materiaId, setClases) => {
    const fetchedMateria=getMateria(gradoId,materiaId);
    fetchedMateria
    .get("clases")
    .map()
    .on((data, key) => {
        setClases((prev) => {
            return [...prev, data].filter((val) => val !== null);
        });
    });
};

export const createClase=(gradoId,materiaId,claseId,data)=>{
   const fetchedMateria=getMateria(gradoId,materiaId);
   return fetchedMateria.get("clases").get(claseId).put(data);
}

export const removeMateria=(gradoId,materiaId,claseId)=>{
    const fetchedMateria=getMateria(gradoId,materiaId);
    fetchedMateria.get("clases").get(claseId).put(null);
}
