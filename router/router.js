const router = require('express').Router();
const controller = require('../controller/controller.js');

router.route('/todos').get(controller.getTodos).post(controller.postTodos).delete(controller.destroyTodo);

module.exports = router;


