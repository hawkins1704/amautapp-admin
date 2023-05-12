import { gun } from "../providers/Gun";
const grados = gun.get("grados");
export const getAllGradosSync = (setGrados) => {
    grados.map().on((data) => {
        setGrados((prev) => [...prev, data]);
    });
};
export const getAllGradosOnce = (setGrados) => {
    grados.map().once((data) => {
        setGrados((prev) => [...prev, data]);
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
