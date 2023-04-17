import { gun } from "../providers/Gun";
import {  getGrado } from "./grado";

export const getAllMateriasSync=(gradoId,setMaterias)=>{
    const fetchedGrado=getGrado(gradoId);
    fetchedGrado.get("materias").map().on((data)=>{
        
        setMaterias((prev)=>([...prev,data]));
    })
}
export const getAllMateriasOnce=(gradoId,setMaterias)=>{
    const fetchedGrado=getGrado(gradoId);
    fetchedGrado.get("materias").map().once((data)=>{
        
        setMaterias((prev)=>([...prev,data]));
    })


}
export const getMateria=(gradoId,materiaId)=>{//Si está creada la obtiene, si no la crea
    const fetchedGrado=getGrado(gradoId);
    return fetchedGrado.get("materias").get(materiaId);
}
export const createMateria=(gradoId,materiaId,data)=>{
    
 
    console.log("Obtuve el materia id:",materiaId);
    console.log("Obtuve la data:",data);
    const fetchedGrado=getGrado(gradoId);
    return fetchedGrado.get("materias").get(materiaId).put(data);
}