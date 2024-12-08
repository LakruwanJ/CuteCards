import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your backend URL

// Function to add a new order
export const addOrder = async (orderData: any) => {
  try {
    const response = await axios.post(`${API_URL}/orders/add`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error adding order:', error);
    return { success: false, message: 'Error adding order' };
  }
};

// Function to get all orders
export const getAllOrders = async () => {
  try {
    const response = await axios.post(`${API_URL}/orders/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all orders:', error);
    return { success: false, message: 'Error fetching all orders' };
  }
};

// Function to get the latest order(s)
export const getLastOrder = async (limit: number = 1) => {
  try {
    const response = await axios.post(`${API_URL}/orders/last`, { limit });
    return response.data;
  } catch (error) {
    console.error('Error fetching latest order(s):', error);
    return { success: false, message: 'Error fetching latest order(s)' };
  }
};

// Function to get an order by ID
export const getOrderById = async (orderId: string) => {
  try {
    const response = await axios.post(`${API_URL}/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching order by ID:', error);
    return { success: false, message: 'Error fetching order by ID' };
  }
};

// Function to update an order
export const updateOrder = async (orderId: string, updateData: any) => {
  try {
    const response = await axios.post(`${API_URL}/orders/${orderId}/update`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating order:', error);
    return { success: false, message: 'Error updating order' };
  }
};

// Function to delete an order
export const deleteOrder = async (orderId: string) => {
  try {
    const response = await axios.post(`${API_URL}/orders/${orderId}/delete`);
    return response.data;
  } catch (error) {
    console.error('Error deleting order:', error);
    return { success: false, message: 'Error deleting order' };
  }
};
