(function () {
  'use strict';

  var Modulos = require('./modulos.model');

  function buscarTodos (req, res) {
    var promisse = Modulos.find().exec();

    promisse.then(function (modulos) {
      res.json(modulos);
    });

    promisse.then(null, function (error) {
      console.log("Erro ao buscarTodos: " + error)
      res.status(500);
      res.json(error);
    });
  }

  function buscarPorId(req, res) {
    var promisse = Modulos.findOne({'_id' : req.params.id}).exec();

    promisse.then(function (modulo) {
      res.json(modulo);
    });
    promisse.then(null, function (error) {
      console.log("Erro ao buscarPorId: " + error)
      res.status(500);
      res.json(error);
    });
  }

  function cadastrar(req, res) {
    var model = new Modulos(req.body);

    var promisse = model.save();

    promisse.then(function(modulo) {
      res.json(modulo);
    });

    promisse.then(null, function (error) {
       console.log("Erro ao cadastrar modulo: " + error)
      res.status(500);
      res.json(error);
    });
  }

  function alterar(req, res) {
    var query = {_id: req.params.id};
    var model = req.body;
    delete model._id;

    var promisse = Modulos.update(query, model);

    promisse.then(function (modulo) {
      res.json(modulo);
    });
    promisse.then(null, function (error) {
      console.log("Erro ao alterar o modulo: " + error);
      res.json(error);
    });
  }

  var service = {
    cadastrar: cadastrar,
    alterar: alterar,
    buscarTodos: buscarTodos,
    buscarPorId: buscarPorId
  };

  module.exports = service;
}());