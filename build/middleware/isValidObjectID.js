"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.default = (function (req, res, next) {
    var validId = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!validId)
        return res.status(400).send('invalid id');
    next();
});
//# sourceMappingURL=isValidObjectID.js.map