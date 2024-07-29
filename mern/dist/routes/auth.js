"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authcontrollers_1 = require("../controllers/authcontrollers");
const router = express_1.default.Router();
router.post('/register', authcontrollers_1.register);
router.post('/login', authcontrollers_1.login);
exports.default = router;
//# sourceMappingURL=auth.js.map