import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your backend URL

// Function to add a new card
export const addCard = async (cardData: any) => {
  try {
    const response = await axios.post(`${API_URL}/cards/add`, cardData);
    return response.data;
  } catch (error) {
    console.error('Error adding card:', error);
    return { success: false, message: 'Error adding card' };
  }
};

// Function to get all cards
export const getAllCards = async () => {
  try {
    const response = await axios.post(`${API_URL}/cards/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all cards:', error);
    return { success: false, message: 'Error fetching all cards' };
  }
};

// Function to get the latest card(s)
export const getLastCard = async (limit: number = 1) => {
  try {
    const response = await axios.post(`${API_URL}/cards/last`, { limit });
    return response.data;
  } catch (error) {
    console.error('Error fetching latest card(s):', error);
    return { success: false, message: 'Error fetching latest card(s)' };
  }
};

// Function to get a card by ID
export const getCardById = async (cardId: string) => {
  try {
    const response = await axios.post(`${API_URL}/cards/${cardId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching card by ID:', error);
    return { success: false, message: 'Error fetching card by ID' };
  }
};

// Function to update a card
export const updateCard = async (cardId: string, updateData: any) => {
  try {
    const response = await axios.post(`${API_URL}/cards/${cardId}/update`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating card:', error);
    return { success: false, message: 'Error updating card' };
  }
};

// Function to delete a card
export const deleteCard = async (cardId: string) => {
  try {
    const response = await axios.post(`${API_URL}/cards/${cardId}/delete`);
    return response.data;
  } catch (error) {
    console.error('Error deleting card:', error);
    return { success: false, message: 'Error deleting card' };
  }
};
