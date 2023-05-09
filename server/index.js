const express=require('express');
const Gun=require('gun');
const app=express();
const path=require('path');
const cors=require('cors');
const port=process.env.PORT||5000;
//To use styles
app.use(express.static(path.join(__dirname,"..","build")));
app.use(express.static("public"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
  });
app.use(cors())
app.use(Gun.serve);

const server=app.listen(port,()=>{
    console.log(`Listening at port localhost:${port}`);
})
Gun({
    file:'db/data',
    web:server,
});