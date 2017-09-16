const Sequelize = require('sequelize')

const db = new Sequelize('db', 'alex', '', {
	dialect: 'sqlite',
	storage: 'todoDB.sqlite'
});

db.authenticate().then(()=> {
	console.log('database authenticated');
}).catch(()=>{
	console.log('authentication failed');
})

module.exports = db;