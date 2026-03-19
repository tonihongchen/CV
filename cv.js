document.addEventListener("DOMContentLoaded", function () {
  
  // Resumen Profesional
  new TypeIt("#titulo-resumen", {
    strings: "RESUMEN PROFESIONAL",
    speed: 50,
    waitUntilVisible: true,
  }).go();

  // Formación
  new TypeIt("#titulo-formacion", {
    strings: "FORMACIÓN",
    speed: 50,
    waitUntilVisible: true,
  }).go();

  // Historial Laboral
  new TypeIt("#titulo-laboral", {
    strings: "HISTORIAL LABORAL",
    speed: 50,
    waitUntilVisible: true,
  }).go();

  // Aptitudes
  new TypeIt("#titulo-aptitudes", {
    strings: "APTITUDES",
    speed: 50,
    waitUntilVisible: true,
  }).go();
});