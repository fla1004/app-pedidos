"use strict";

const listar = function (req, res) {
  res.json({
    mensaje: "Lista producto"
  });
};

const mostrar = function (req, res) {
  res.json({
    mensaje: "mostrarproducto"
  });
};

const guardar = function (req, res) {
  res.json({
    mensaje: "guardar producto"
  });
};

const modificar = function (req, res) {
  res.json({
    mensaje: "producto modificado"
  });
};

const eliminar = function (req, res) {
  res.json({
    mensaje: "producto eliminado"
  });
};

module.exports = {
  listar,
  mostrar,
  guardar,
  modificar,
  eliminar
};