const router = require('express').Router();
const controller = require('../controller/controller.js');

// router.route('/').get(controller.getIndex);

router.route('/todos').get(controller.getTodos).post(controller.postTodos);

module.exports = router;


