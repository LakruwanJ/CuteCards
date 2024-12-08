const CardService = require('./../services/cardService');

// Controller to add a card
const addCard = async (req, res) => {
  try {
    const { id, name, details, size, price, tags } = req.body;
    const response = await CardService.addCard({ id, name, details, size, price, tags })
    return res.status(response.success ? 201 : 400).json({ message: response.message });
  } catch (error) {
    console.error('Error in addCard controller:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to get all cards
const getAllCards = async (req, res) => {
  try {
    const response = await CardService.getAllCards();
    return res.status(response.success ? 200 : 400).json(response.success ? { cards: response.cards } : { message: response.message });
  } catch (error) {
    console.error('Error in getAllCards controller:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to get a card by ID
const getCardById = async (req, res) => {
  try {
    const { cardId } = req.params;
    const response = await CardService.getCardById(cardId);
    return res.status(response.success ? 200 : 404).json(response.success ? { card: response.card } : { message: response.message });
  } catch (error) {
    console.error('Error in getCardById controller:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to fetch the latest card
const getLastCard = async (req, res) => {
  try {
    const limit = req.body.limit || 1;
    const response = await CardService.getLastCard(limit);
    return res.status(response.success ? 200 : 400).json(response);
  } catch (error) {
    console.error('Error in getLastCard controller:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to update a card
const updateCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const updateData = req.body;
    const response = await CardService.updateCard(cardId, updateData);
    return res.status(response.success ? 200 : 400).json(response.success ? { message: response.message, card: response.card } : { message: response.message });
  } catch (error) {
    console.error('Error in updateCard controller:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to delete a card
const deleteCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const response = await CardService.deleteCard(cardId);
    return res.status(response.success ? 200 : 404).json({ message: response.message });
  } catch (error) {
    console.error('Error in deleteCard controller:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  addCard,
  getAllCards,
  getCardById,
  getLastCard,
  updateCard,
  deleteCard,
};
