const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname,"./public")));

app.listen(process.env.PORT || 3002, function() { console.log("El servidor esta corriendo en http://localhost:3002"); });

app.get("/",(req,res)=> {
res.sendFile(path.resolve(__dirname,"./views/home.html"))
});
//este login es para que este el servidor localhost/login
app.get("/login", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/login.html");
    res.sendFile(htmlPath)
})
//Este login es para que cuando pongamos enviar nos lleve de nuevo al home
app.post("/login", (req, res) => {
    console.log("Llegó el formulario completo");
    let htmlPath = path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlPath)
})


app.get("/register", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/register.html");
    res.sendFile(htmlPath)
})

app.post("/register", (req, res) => {
    console.log("Llegó el formulario completo");
    let htmlPath = path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlPath)
})

app.post("/", (req, res) => {
    console.log("Llegó el formulario completo");
    let htmlPath = path.resolve(__dirname, "./views/search.html");
    res.sendFile(htmlPath)
})