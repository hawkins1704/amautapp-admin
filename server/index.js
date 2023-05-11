const express=require('express');
const Gun=require('gun');
const app=express();
const path=require('path');
const cors=require('cors');
const port=process.env.PORT||5000;
//To use styles

const buildPath = path.resolve(__dirname, '../build');
app.use(express.static(buildPath));
app.use(express.static("public"));

app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath,"index.html"));
  });
app.use(cors())
app.use(Gun.serve);

const server=app.listen(port,()=>{
    console.log(`Listening at port localhost:${port}`);
})
Gun({
    file:path.join(__dirname, 'db/data'),
    web:server,
});