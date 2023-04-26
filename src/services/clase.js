import { getGrado } from "./grado";
const materias = getGrado().get("materias");
export const getAllClasesSync = (materiaId, setClases) => {
    materias
    .get(materiaId)
    .get("clases")
    .map()
    .on((data, key) => {
        setClases((prev) => {
            return [...prev, data].filter((val) => val !== null);
        });
    });
};
