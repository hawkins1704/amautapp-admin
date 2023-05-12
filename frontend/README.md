# Amautapp Admin

## Despliegue local
Para desplegar el proyecto de manera local existen diversas formas:
- Si se desea desplegar solo el cliente frontend: <code>npm run start-client</code>
- Si se desea desplegar el cliente frontend junto con el servicio de GUN: <code>npm run start-dev</code>
(OBS: Para este segundo comando tener en cuenta que no realizará Hot Reload apenas se cambie algo en la interfaz, por loq ue si se desea realizar cambios en interfaz e inspeccionar de manera inmediata se recomienda el primer comando)


## Despliegue en la nube
Para poder desplegar en algun servicio en la nube:
- Primero se debe ejecutar el comando <code>npm run build</code>.
- Luego recien se puede desplegar a algun servicio el cual ejecutará el comando <code>npm start</code>.
