const express=require('express');
const Gun=require('gun');
require('gun-mongo-key');
const app=express();
const path=require('path');
const port=5000;
//To use styles
app.use(express.static(path.join(__dirname,"..","build")));
app.use(express.static("public"));



app.use(Gun.serve);

const server=app.listen(port,()=>{
    console.log(`Listening at port localhost:${port}`);
})
Gun({
    file:false,
    web:server,
    mongo:{
        host:'localhost',
        port:'27017',
        database:'repo-educacion-db',
        collection: 'gun-mongo',
        query:'',
        opt: {
            poolSize: 25 // how large is the connection pool
            // include any other options when initializing:
            // See: http://mongodb.github.io/node-mongodb-native/2.2/reference/connecting/connection-settings/
        },
        chunkSize: 250 // see below
    },
    // mongo:'mongodb://localhost:27017/repo-educacion-db',
});