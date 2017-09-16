const Sequelize = require('sequelize');
const db = require('../dbconfig.js');

const Todo = db.define('Todo', {
	item: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	priority: {
		type: Sequelize.INTEGER,
		allowNull: true,
		allowNull: false
	}
});

Todo.sync().then(() => {
	console.log('table mounted');
}).catch(() => {
	console.log('failed to mount');
})

// Todo.create({ item: 'clean', priority: '4'});

module.exports = Todo;