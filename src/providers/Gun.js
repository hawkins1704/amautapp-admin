
import Gun from "gun";
export const gun = Gun({
    //revisar como configurar para que se coloque direccion IP del profesor aquí de manera automática
    // peers: [`${window.location.origin}/gun`, "http://192.168.1.111:8080/gun","https://amautapp-admin.herokuapp.com/gun"], // Put the relay node that you want here
    peers: [`${window.location.origin}/gun`, "http://192.168.1.111:8080/gun"], // Put the relay node that you want here
    localStorage: false,
});