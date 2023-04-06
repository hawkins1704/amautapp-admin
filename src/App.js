import Gun from "gun";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
const gun = Gun({
    //revisar como configurar para que se coloque direccion IP del profesor aquí de manera automática
    peers: [`${window.location.origin}/gun`,"http://192.168.1.111:8080/gun"], // Put the relay node that you want here
});

function App() {
    const [cursos, setCursos] = useState();
    const [cursoForm, setCursoForm] = useState({});
    const [listaCursos, setListaCursos] = useState([]);
    const cursosRef=gun.get('cursos');
    useEffect(() => {
        cursosRef.map().on((c)=>{
            console.log("Getting updates: ",c._);

            setListaCursos((state)=>[...state,c]);
        })

    }, []);



    const removeDuplicatedData=(array)=>{
        return [...new Set(array)]
    }
    const handleChange=(e)=>{
      setCursoForm({
        ...cursoForm,
        [e.target.name]:e.target.value,
      })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        cursosRef.set(cursoForm);
        setCursoForm({
            nombre:"",
            contenido:"",
        });
       const peers=gun._.opt.peers;
    console.log("Peers connected: ",peers);
    };
    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <h1>Gestión de cursos</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={cursoForm.nombre}/> <br />
                    <input type="text" name="contenido" placeholder="Contenido" onChange={handleChange} value={cursoForm.contenido}/> <br />
                    <input type="submit" value={"Enviar"} />
                </form>
                <h2>Lista de cursos</h2>
                {
                    removeDuplicatedData(listaCursos).map((e,i)=>{
                        return(
                            <div>
                                <h3>{e.nombre}</h3>
                                <p>{e.contenido}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;
