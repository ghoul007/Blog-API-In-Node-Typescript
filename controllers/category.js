
const { Category, validate } = require('../models/category')
require('express-async-errors')

module.exports.saveCategory = async (req, res, next) => {
        const { error } = validate(req.body)
        if (error) return res.status(400).send('invalid data')
        const category = new Category({ name: req.body.name })
        const result = await category.save();
        res.status(200).json(result)
}

module.exports.getAllCategories = async (req, res, next) => {
        const categories = await Category.find();
        res.status(200).json(categories)
}

module.exports.getCategoryByID = async (req, res, next) => {
 
        const category = await Category.findById(req.params.id);
        if(!category) return res.status(404).send('not found')
        res.status(200).json(category)
}

module.exports.updateCategory = async (req, res, next) => {
        const { error } = validate(req.body)
        if (error) return res.status(400).send('invalid data')
        const category = await Category.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
        if(!category) return res.status(404).send('not found')
        res.status(200).json(category)
}

module.exports.deleteCategory = async (req, res, next) => {
        const category = await Category.findByIdAndDelete(req.params.id);
        if(!category) return res.status(404).send('not found')
        res.status(200).json(category)
}