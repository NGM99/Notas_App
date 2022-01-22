const fs = require("fs");

function leerJSON() {
  let JSONData = JSON.parse(fs.readFileSync("./tareas.json", "utf-8"));
  return JSONData;
}

function escribirJSON(titulo, estado) {
  let JSONData = leerJSON();
  JSONData.push({ titulo: titulo, estado: estado });
  fs.writeFileSync("./tareas.json", JSON.stringify(JSONData, null, 2));
}

function filtrarPorEstado(filtro) {
  let datos = leerJSON();
  let filtrarJSON = datos.filter(function (dato) {
    return dato.estado === filtro;
  });
  console.log(filtrarJSON);
}

module.exports = { leerJSON, escribirJSON, filtrarPorEstado };
