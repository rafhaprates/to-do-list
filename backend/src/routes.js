const express = require('express');

const UsersController = require('./controllers/UsersController');
const TasksController = require('./controllers/TasksController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const SearchController = require('./controllers/SearchController');

const routes = express.Router();


//Sessão da Rota
routes.post('/session', SessionController.store);

//Rotas de Usuarios 
routes.get('/users', UsersController.index)
routes.post('/users', UsersController.store);
routes.post('/users_search', UsersController.show);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

//Rotas das tarefas
routes.get('/tasks', TasksController.index);
routes.post('/tasks', TasksController.store);
routes.put('/tasks/:id', TasksController.update);
routes.delete('/tasks/:id', TasksController.destroy);

//rotas do perifl de Usuario
routes.get('/profile', ProfileController.index);

//rotas das pequisas
routes.get('/search', SearchController.index);

module.exports = routes;