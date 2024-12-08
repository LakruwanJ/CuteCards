const OrderService = require('./../services/orderService');


// Controller to add an order
const addOrder = async (req, res) => {
  try {
    const { id, name, email, phoneNumber, address, postalCode, cardId, details, totalPrice } = req.body;
    const response = await OrderService.addOrder({ id, name, email, phoneNumber, address, postalCode, cardId, details, totalPrice });
    return res.status(response.success ? 201 : 400).json({ message: response.message });
  } catch (error) {
    console.error('Error in addOrder controller:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to get all orders
const getAllOrders = async (req, res) => {
  try {
    const response = await OrderService.getAllOrders();
    return res.status(response.success ? 200 : 400).json(response.success ? { orders: response.orders } : { message: response.message });
  } catch (error) {
    console.error('Error in getAllOrders controller:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to get an order by ID
const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const response = await OrderService.getOrderById(orderId);
    return res.status(response.success ? 200 : 404).json(response.success ? { order: response.order } : { message: response.message });
  } catch (error) {
    console.error('Error in getOrderById controller:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to fetch the latest order
const getLastOrder = async (req, res) => {
  try {
    const limit = req.body.limit || 1;
    const response = await OrderService.getLastOrder(limit);
    return res.status(response.success ? 200 : 400).json(response);
  } catch (error) {
    console.error('Error in getLastOrder controller:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to update an order
const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const updateData = req.body;
    const response = await OrderService.updateOrder(orderId, updateData);
    return res.status(response.success ? 200 : 400).json(response.success ? { message: response.message, order: response.order } : { message: response.message });
  } catch (error) {
    console.error('Error in updateOrder controller:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to delete an order
const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const response = await OrderService.deleteOrder(orderId);
    return res.status(response.success ? 200 : 404).json({ message: response.message });
  } catch (error) {
    console.error('Error in deleteOrder controller:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  addOrder,
  getAllOrders,
  getOrderById,
  getLastOrder,
  updateOrder,
  deleteOrder,
};
