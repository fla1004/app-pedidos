"use strict";

const listar = function (req, res) {
  res.json({
    mensaje: "Lista cliente"
  });
};

const mostrar = function (req, res) {
  res.json({
    mensaje: "mostrarcliente"
  });
};

const guardar = function (req, res) {
  res.json({
    mensaje: "guardar cliente"
  });
};

const modificar = function (req, res) {
  res.json({
    mensaje: "cliente modificado"
  });
};

const eliminar = function (req, res) {
  res.json({
    mensaje: "cliente eliminado"
  });
};

module.exports = {
  listar,
  mostrar,
  guardar,
  modificar,
  eliminar
};