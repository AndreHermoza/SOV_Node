const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Redirigir a index.html cuando se accede a la raíz
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Manejar la solicitud POST del formulario
app.post("/submit", (req, res) => {
    const { nombres, apellidos, edad } = req.body;
    
    // Generar HTML dinámicamente
    const responseHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Respuestas</title>
    </head>
    <body>
        <h1>Datos recibidos</h1>
        <p>Nombres: ${nombres}</p>
        <p>Apellidos: ${apellidos}</p>
        <p>Edad: ${edad}</p>
    </body>
    </html>
    `;
    
    // Enviar el HTML generado como respuesta
    res.send(responseHTML);
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("Server on port 3000");
});