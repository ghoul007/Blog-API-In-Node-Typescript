"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var category_1 = require("../controllers/category");
var isValidObjectID_1 = require("../middleware/isValidObjectID");
var auth_1 = require("../middleware/auth");
router.get('/', auth_1.default, category_1.getAllCategories);
router.post('/', auth_1.default, category_1.saveCategory);
router.get('/:id', auth_1.default, isValidObjectID_1.default, category_1.getCategoryByID);
router.put('/:id', auth_1.default, isValidObjectID_1.default, category_1.updateCategory);
router.delete('/:id', auth_1.default, isValidObjectID_1.default, category_1.deleteCategory);
exports.default = router;
//# sourceMappingURL=category.js.map