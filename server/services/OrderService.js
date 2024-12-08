const Order = require('../models/OrderModel');
const axios = require('axios');

class OrderService {
  static async addOrder(orderData) {
    try {
      const newOrder = new Order(orderData);
      await newOrder.save();
      console.log('Order added successfully:', newOrder);
      return { success: true, message: 'Order added successfully' };
    } catch (error) {
      console.error('Error while adding order:', error);
      return { success: false, message: 'Error while adding order' };
    }
  }

  static async getAllOrders() {
    try {
      const orders = await Order.find({});
      if (!orders.length) {
        return { success: false, message: 'No orders found' };
      }

      return { success: true, orders };
    } catch (error) {
      console.error('Error while fetching all orders:', error);
      return { success: false, message: 'Error fetching all orders' };
    }
  }

  static async getOrderById(orderId) {
    try {
      const order = await Order.findOne({id:orderId});
      if (!order) {
        return { success: false, message: 'Order not found' };
      }

      return { success: true, order };
    } catch (error) {
      console.error('Error while fetching order by ID:', error);
      return { success: false, message: 'Error fetching order by ID' };
    }
  }

  static async getLastOrder(limit = 1) {
    try {
      // Find the latest orders by sorting by `orderDate` in descending order
      const latestOrders = await Order.find().sort({ orderDate: -1 }).limit(limit);

      if (!latestOrders || latestOrders.length === 0) {
        return { success: false, message: 'No orders found' };
      }

      console.log('Latest orders fetched successfully:', latestOrders);
      return { success: true, message: 'Latest orders fetched successfully', data: latestOrders };
    } catch (error) {
      console.error('Error while fetching latest orders:', error);
      return { success: false, message: 'Error while fetching latest orders' };
    }
  }

  static async updateOrder(orderId, updateData) {
    try {
      const updatedOrder = await Order.findOneAndUpdate({id: orderId}, updateData, {
        new: true,
        runValidators: true,
      });

      if (!updatedOrder) {
        return { success: false, message: 'Order not found' };
      }

      console.log('Order updated successfully:', updatedOrder);
      return { success: true, message: 'Order updated successfully', order: updatedOrder };
    } catch (error) {
      console.error('Error while updating order:', error);
      return { success: false, message: 'Error updating order' };
    }
  }

  static async deleteOrder(orderId) {
    try {
      const deletedOrder = await Order.findOneAndDelete({id: orderId});
      if (!deletedOrder) {
        return { success: false, message: 'Order not found' };
      }

      return { success: true, message: 'Order deleted successfully' };
    } catch (error) {
      console.error('Error while deleting order:', error);
      return { success: false, message: 'Error deleting order' };
    }
  }

}

module.exports = OrderService;
