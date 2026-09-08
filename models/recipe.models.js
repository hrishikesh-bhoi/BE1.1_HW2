const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    servings: Number,
    prepTime: Number,
    cookingTime: Number,
    ingredients: [String],
    direction: [String],
    note: String

});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;