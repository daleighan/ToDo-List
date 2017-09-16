const Todos = require('../DB/models/dbmodel.js');
const path = require('path')

module.exports.getTodos = (req, res) => {
	Todos.findAll({}).then((todoList) => {
		res.status(200).json(todoList);
	});
}

module.exports.postTodos = (req, res) => {
	Todos.create({
		item: req.body.item,
		priority: req.body.priority
	})
	.then((user) => {
		res.status(201).send(req.body);
	})
	.catch(() => {
		console.log('error in posting');
		res.status(404).send();
	})
}

module.exports.destroyTodo = (req, res) => {
	Todos.destroy({
    where: {
      item: req.body.item,
			priority: req.body.priority
    }
	})
	.then((user) => {
		res.status(202).send(req.body);
	})
	.catch(() => {
		res.status(404).send();
	})
}