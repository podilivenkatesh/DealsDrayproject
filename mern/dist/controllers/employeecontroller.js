"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.getEmployeeById = exports.getEmployees = exports.createEmployee = void 0;
const employee_1 = __importDefault(require("../models/employee"));
const createEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { image, name, email, mobile, designation, gender, course } = req.body;
    try {
        const newEmployee = new employee_1.default({
            name,
            email,
            mobile,
            designation,
            gender,
            course,
            image,
        });
        const employee = yield newEmployee.save();
        res.json(employee);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
exports.createEmployee = createEmployee;
const getEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield employee_1.default.find();
        res.json(employees);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
exports.getEmployees = getEmployees;
const getEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield employee_1.default.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ msg: 'Employee not found' });
        }
        res.json(employee);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
exports.getEmployeeById = getEmployeeById;
const updateEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { image, name, email, mobile, designation, gender, course } = req.body;
    const updatedEmployee = { image, name, email, mobile, designation, gender, course };
    try {
        let employee = yield employee_1.default.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ msg: 'Employee not found' });
        }
        employee = yield employee_1.default.findByIdAndUpdate(req.params.id, { $set: updatedEmployee }, { new: true });
        res.json(employee);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
exports.updateEmployee = updateEmployee;
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let employee = yield employee_1.default.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ msg: 'Employee not found' });
        }
        yield employee_1.default.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Employee removed' });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
exports.deleteEmployee = deleteEmployee;
//# sourceMappingURL=employeecontroller.js.map