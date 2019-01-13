"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var post_1 = require("../controllers/post");
var router = express.Router();
var auth_1 = require("../middleware/auth");
var isValidObjectID_1 = require("../middleware/isValidObjectID");
router.get('/', post_1.getAllPosts);
router.get('/:id', isValidObjectID_1.default, post_1.getPostByID);
router.post('/', auth_1.default, post_1.createPost);
router.put('/:id', auth_1.default, isValidObjectID_1.default, post_1.updatePost);
router.delete('/:id', auth_1.default, isValidObjectID_1.default, post_1.deletePost);
exports.default = router;
//# sourceMappingURL=post.js.map