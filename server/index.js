const express=require('express');
const Gun=require('gun');
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
});