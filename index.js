const express = require("express");
const Gun = require("gun");
const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 5000;
//To use styles

app.use(Gun.serve);
app.use(express.static(path.join(__dirname, "frontend", "build")));
app.use(express.static(path.join(__dirname, "frontend", "public")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

const server = app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}`);
});
const gun = Gun({
    file: path.join(__dirname, "db/data"),
    web: server,
});
// var cont=0;
// gun.on('in', (msg) => {
//     console.log('Conexión entrante:', ++cont);
//   });
