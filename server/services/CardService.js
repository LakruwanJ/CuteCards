const Card = require('../models/CardModel');
const axios = require('axios');

class CardService {
  static async addCard(cardData) {
    try {
      const newCard = new Card(cardData);
      await newCard.save();
      console.log('Card added successfully:', newCard);
      return { success: true, message: 'Card added successfully' };
    } catch (error) {
      console.error('Error while adding card:', error);
      return { success: false, message: 'Error while adding card' };
    }
  }

  static async getAllCards() {
    try {
      const cards = await Card.find({});
      if (!cards.length) {
        return { success: false, message: 'No cards found' };
      }

      return { success: true, cards };
    } catch (error) {
      console.error('Error while fetching all cards:', error);
      return { success: false, message: 'Error fetching all cards' };
    }
  }

  static async getCardById(cardId) {
    try {
      const card = await Card.findOne({id: cardId});
      if (!card) {
        return { success: false, message: 'Card not found' };
      }

      return { success: true, card };
    } catch (error) {
      console.error('Error while fetching card by ID:', error);
      return { success: false, message: 'Error fetching card by ID' };
    } 
  }

  static async getLastCard(limit = 1) {
    try {
      // Find the latest cards by sorting by `addedDate` in descending order
      const latestCards = await Card.find().sort({ addedDate: -1 }).limit(limit);

      if (!latestCards || latestCards.length === 0) {
        return { success: false, message: 'No cards found' };
      }

      console.log('Latest cards fetched successfully:', latestCards);
      return { success: true, message: 'Latest cards fetched successfully', data: latestCards };
    } catch (error) {
      console.error('Error while fetching latest cards:', error);
      return { success: false, message: 'Error while fetching latest cards' };
    }
  }

  static async updateCard(cardId, updateData) {
    try {
      const updatedCard = await Card.findOneAndUpdate({id: cardId}, updateData, {
        new: true,
        runValidators: true,
      });

      if (!updatedCard) {
        return { success: false, message: 'Card not found' };
      }

      console.log('Card updated successfully:', updatedCard);
      return { success: true, message: 'Card updated successfully', card: updatedCard };
    } catch (error) {
      console.error('Error while updating card:', error);
      return { success: false, message: 'Error updating card' };
    }
  }

  static async deleteCard(cardId) {
    try {
      const deletedCard = await Card.findOneAndDelete({id: cardId});
      if (!deletedCard) {
        return { success: false, message: 'Card not found' };
      }

      return { success: true, message: 'Card deleted successfully' };
    } catch (error) {
      console.error('Error while deleting card:', error);
      return { success: false, message: 'Error deleting card' };
    }
  }

}

module.exports = CardService;
