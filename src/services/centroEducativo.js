import { gun } from "../providers/Gun";


const centros = gun.get("centros-educativos");
export const getCentroEducativo = (centroEducativoId) => {
    return centros.get(centroEducativoId);
};

export const createCentroEducativo = (centroEducativoId, data) => {
    return centros.get(centroEducativoId).put(data);
};

export const updateCentroEducativo = (centroEducativoId, data) => {
    return centros.get(centroEducativoId).put(data);
};
export const removeCentroEducativo = (centroEducativoId) => {
    return centros.get(centroEducativoId).put(null);
};
