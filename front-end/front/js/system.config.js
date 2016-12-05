'use strict';

/**
 * @ngInject
 */
function routerConfig($routeProvider, $locationProvider, SystemUriConfig) {
  $routeProvider.
    when(SystemUriConfig.login, {
      templateUrl: 'expose/login/login'
    }).
    when(SystemUriConfig.loginAlteracaoSenha, {
      templateUrl: 'expose/login/login'
    }).
    when(SystemUriConfig.home, {
      templateUrl: 'expose/home/home',
    }).
    when(SystemUriConfig.projeto, {
      templateUrl: 'expose/projeto/projeto',
      controller: 'ProjetoController'
    }).
    when(SystemUriConfig.projetoCadastro, {
      templateUrl: 'expose/projeto/projeto-formulario',
      controller: 'ProjetoCadastroController'
    }).
    when(SystemUriConfig.projetoAlteracao, {
      templateUrl: 'expose/projeto/projeto-formulario',
      controller: 'ProjetoEdicaoController'
    }).
    when(SystemUriConfig.equipe, {
      templateUrl: 'expose/equipe/equipe',
      controller: 'EquipeController'
    }).
    when(SystemUriConfig.configuracao, {
      templateUrl: 'expose/home/configuracao',
      controller: 'ConfiguracaoController'
    }).
    when(SystemUriConfig.gestaoProjetoDashboard, {
      templateUrl: 'expose/dashboard/dashboard',
    }).
    when(SystemUriConfig.gestaoProjetoKanbanModulo, {
      templateUrl: 'expose/kanban/kanban-modulo',
      controller: 'KanbanController'
    }).
    when(SystemUriConfig.gestaoProjetoDashboard, {
      templateUrl: 'expose/dashboard/dashboard',
    }).
    when(SystemUriConfig.gestaoProjetoModulo, {
      templateUrl: 'expose/modulo/modulo',
      controller: 'ModuloController'
    }).
    when(SystemUriConfig.gestaoProjetoModuloCadastro, {
      templateUrl: 'expose/modulo/modulo-formulario',
      controller: 'ModuloCadastroController'
    }).
    when(SystemUriConfig.gestaoProjetoModuloAlteracao, {
      templateUrl: 'expose/modulo/modulo-formulario',
      controller: 'ModuloEdicaoController'
    }).
    when(SystemUriConfig.gestaoProjetoTarefaFuncionalidade, {
      templateUrl: 'expose/tarefa-funcionalidade/tarefa-funcionalidade',
      controller: 'TarefaFuncionalidadeController'
    }).
    when(SystemUriConfig.gestaoProjetoTarefaFuncionalidadeCadastro, {
      templateUrl: 'expose/tarefa-funcionalidade/tarefa-funcionalidade-formulario',
      controller: 'TarefaFuncionalidadeCadastroController'
    }).
    when(SystemUriConfig.gestaoProjetoTarefaFuncionalidadeAlteracao, {
      templateUrl: 'expose/tarefa-funcionalidade/tarefa-funcionalidade-formulario',
      controller: 'TarefaFuncionalidadeEdicaoController'
    }).
    when(SystemUriConfig.gestaoProjetoTag, {
      templateUrl: 'expose/tag/tag',
      controller: 'TagCadastroController'
    }).
    when(SystemUriConfig.notFound, {
      templateUrl: 'expose/main/404'
    }).
    otherwise({
      redirectTo: SystemUriConfig.notFound
    });
  $locationProvider.html5Mode(true);
}

module.exports = routerConfig;