const express = require('express');
const router = express.Router();
const CardController = require('./controllers/CardController');
const OrderController = require('./controllers/OrderController');

// Card Routes
router.post('/cards/add', CardController.addCard);
router.post('/cards/all', CardController.getAllCards); // Custom POST route for getting all cards
router.post('/cards/last', CardController.getLastCard);
router.post('/cards/:cardId', CardController.getCardById);
router.post('/cards/:cardId/update', CardController.updateCard);
router.post('/cards/:cardId/delete', CardController.deleteCard);

// Order Routes
router.post('/orders/add', OrderController.addOrder);
router.post('/orders/all', OrderController.getAllOrders); // Custom POST route for getting all orders
router.post('/orders/last', OrderController.getLastOrder);
router.post('/orders/:orderId', OrderController.getOrderById);
router.post('/orders/:orderId/update', OrderController.updateOrder);
router.post('/orders/:orderId/delete', OrderController.deleteOrder);

module.exports = router;
