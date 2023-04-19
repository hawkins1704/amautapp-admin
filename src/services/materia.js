
import { useNavigate } from "react-router-dom";
import { gun } from "../providers/Gun";
import { getGrado } from "./grado";

export const getAllMateriasSync = (gradoId, setMaterias) => {
    const fetchedGrado = getGrado(gradoId);
    fetchedGrado
        .get("materias")
        .map()
        .on((data, key) => {
            // if (data === null) {
            //     console.log(`El valor en la posición ${key} está eliminado`);
            // } else {
            //     console.log(`El valor en la posición ${key} es:`, data);
            // }
            setMaterias((prev) => {
                // const realUpdatedState=[...prev, data];
                // const supposedUpdatedState=[...prev,data].filter((val) => val !== null);
                // console.log("REAL UPDATED STATE: ",realUpdatedState);
                // console.log("SUPPOSED UPDATED STATE: ",supposedUpdatedState);
                return [...prev, data].filter((val) => val !== null);
            });
        });
};
export const getAllMateriasOnce = (gradoId, setMaterias) => {
    const fetchedGrado = getGrado(gradoId);
    fetchedGrado
        .get("materias")
        .map()
        .once((data) => {
            setMaterias((prev) => [...prev, data]);
        });
};
export const getMateria = (gradoId, materiaId) => {
    //Si está creada la obtiene, si no la crea
    const fetchedGrado = getGrado(gradoId);
    return fetchedGrado.get("materias").get(materiaId);
};
export const createMateria = (gradoId, materiaId, data) => {
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
