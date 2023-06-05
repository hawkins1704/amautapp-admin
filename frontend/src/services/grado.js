import { gun } from "../providers/Gun";
import { filterDuplicated } from "../utils";
const grados = gun.get("grados");
export const getAllGradosSync = (setGrados) => {
    grados.map().on((data) => {
        console.log("GRADOS OBTENIDOS: ",data);
        setGrados((prev) => {
            return filterDuplicated(
                [...prev, data].filter((val) => val !== null)
            );
        });
    });
};
export const getAllGradosOnce = (setGrados) => {
    grados.map().once((data) => {
        console.log("GRADOS OBTENIDOS: ",grados);
        setGrados((prev) => {
            return filterDuplicated(
                [...prev, data].filter((val) => val !== null)
            );
        });
    });
};
export const getGrado = (gradoId) => {
    return grados.get(gradoId);
};
export const createGrado = (gradoId, data) => {
    return grados.get(gradoId).put(data);
};
export const updateGrado = (gradoId, data) => {
    return grados.get(gradoId).put(data);
};
export const removeGrado = (gradoId) => {
    return grados.get(gradoId).put(null);
};
