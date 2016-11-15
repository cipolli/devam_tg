'use strict';

var factoriesModule = require('./_index');

function systemUri(SystemUriConfig) {
    return {
        login: function() {
            return SystemUriConfig.login;
        },
        home: function() {
            return SystemUriConfig.home;
        },
        funcionalidade: function() {
            return SystemUriConfig.funcionalidade;
        },
        modulo: function() {
            return SystemUriConfig.gestaoProjetoModulo;
        },
        moduloCadastro: function() {
            return SystemUriConfig.gestaoProjetoModuloCadastro;
        },
        moduloAlteracao: function() {
            return SystemUriConfig.gestaoProjetoModuloAlteracao;
        },
        tarefaFuncionalidade: function() {
            return SystemUriConfig.gestaoProjetoTarefaFuncionalidade;
        },
        tarefaFuncionalidadeCadastro: function() {
            return SystemUriConfig.gestaoProjetoTarefaFuncionalidadeCadastro;
        },
        tarefaFuncionalidadeAlteracao: function(id) {
            return SystemUriConfig.gestaoProjetoModuloAlteracao.replace(':id', id);
        },
        projeto: function() {
            return SystemUriConfig.projeto;
        },
        equipe: function() {
            return SystemUriConfig.equipe;
        },
        projetoCadastro: function() {
            return SystemUriConfig.projetoCadastro;
        },
        projetoAlteracao: function() {
            return SystemUriConfig.projetoAlteracao;
        },
        kanban: function() {
            return SystemUriConfig.gestaoProjetoKanbanModulo;
        },
        dashboard: function() {
            return SystemUriConfig.gestaoProjetoDashboard;
        },
        notFound: function() {
            return SystemUriConfig.notFound;
        }
    };
}

factoriesModule.factory('systemUri', systemUri);