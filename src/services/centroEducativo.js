import { gun } from "../providers/Gun";


const centros = gun.get("centros-educativos");
export const getAllCentrosEducativosSync=(setCentrosEducativos)=>{
    centros.map().on((data)=>{
        setCentrosEducativos((prev)=>{
         return [...prev,data].filter((val) => val !== null);
        });
    })
}
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
    const fetchedCentros=gun.get('centros-educativos');
    return fetchedCentros.get(centroEducativoId).put(null);
};
