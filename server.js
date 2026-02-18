const http = require("http");

http.createServer((req, res) => {

    if (req.url === "/deisy") {

        const aprendiz = {
            nombre: "Deisy",
            formacion: "Análisis y Desarrollo de Software",
            centro: "SENA"
        };

        res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });

        res.end(JSON.stringify(aprendiz));
    }

    else if (req.url === "/usuario") {

        const usuario = {
            nombre: "Alisson",
            rol: "Ingeniera",
            activo: true
        };

        res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });

        res.end(JSON.stringify(usuario));
    }

    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Ruta no encontrada" }));
    }

}).listen(3000);

console.log("Servidor corriendo en http://localhost:3000");
