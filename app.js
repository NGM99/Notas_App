let {
  leerJSON,
  escribirJSON,
  filtrarPorEstado,
} = require("./funcionesDeTareas");

param = process.argv[2];

switch (param) {
  case "listar":
    let dato = leerJSON();
    dato.forEach(function (d) {
      console.log(d.titulo);
    });
    break;

  case "crear":
    let titulo = process.argv[3];
    let estado = "pendiente";
    escribirJSON(titulo, estado);
    break;

  case "filtrar":
    let filtro = process.argv[3];
    filtrarPorEstado(filtro);
    break;

  case undefined:
    console.log("Atención - Tienes que pasar una acción");
    break;

  default:
    console.log("No entiendo qué quieres hacer");
}
