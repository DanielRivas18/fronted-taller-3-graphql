const express = require('express');
const path = require('path');
const app = express();
const port = 3200;

// Middleware para servir archivos estáticos desde la carpeta 'views'
app.use(express.static(path.join(__dirname, 'views')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});



// Escuchar en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));
