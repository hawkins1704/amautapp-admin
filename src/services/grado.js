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
export const agregarGrado = (gradoId, data) => {
    return grados.get(gradoId).put(data);
};
export const editarGrado = (gradoId, data) => {
    return grados.get(gradoId).put(data);
};
export const quitarGrado = (gradoId) => {
    return grados.get(gradoId).put(null);
};
