
import  Category  from '../models/category';
require('express-async-errors')

export  async function saveCategory(req, res, next){
        // const { error } = validate(req.body)
        // if (error) return res.status(400).send('invalid data')
        const category = new Category({ name: req.body.name })
        const result = await category.save();
        res.status(200).json(result)
}

export async function getAllCategories(req, res, next){
        const categories = await Category.find();
        res.status(200).json(categories)
}

export async function getCategoryByID(req, res, next) {
 
        const category = await Category.findById(req.params.id);
        if(!category) return res.status(404).send('not found')
        res.status(200).json(category)
}

export async function updateCategory (req, res, next) {
        // const { error } = validate(req.body)
        // if (error) return res.status(400).send('invalid data')
        const category = await Category.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
        if(!category) return res.status(404).send('not found')
        res.status(200).json(category)
}

export async function deleteCategory(req, res, next)  {
        const category = await Category.findByIdAndRemove(req.params.id);
        if(!category) return res.status(404).send('not found')
        res.status(200).json(category)
}