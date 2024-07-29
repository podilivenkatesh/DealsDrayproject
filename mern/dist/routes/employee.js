"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../middleware/auth"));
const employeecontroller_1 = require("../controllers/employeecontroller");
const router = express_1.default.Router();
router.post('/', auth_1.default, employeecontroller_1.createEmployee);
router.get('/', auth_1.default, employeecontroller_1.getEmployees);
router.get('/:id', auth_1.default, employeecontroller_1.getEmployeeById);
router.put('/:id', auth_1.default, employeecontroller_1.updateEmployee);
router.delete('/:id', auth_1.default, employeecontroller_1.deleteEmployee);
exports.default = router;
//# sourceMappingURL=employee.js.map