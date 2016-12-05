module.exports = function (express) {
  'use strict';

  var router = express.Router();
  var routes = [
    '/',
    '/login/alteracao/:id',
    '/:page',
    '/:page/cadastro',
    '/:visaoProjeto/:page/cadastro',
    '/:visaoProjeto/:page/alteracao/:id',
    '/:page/alteracao/:id',
    '/:page/:id'
  ];

  router.get(routes, function (req, res) {
    res.render('main/views/index');
  });

  return router;
};
