"use strict";
// import express from 'express';
// import connectDB from './config/db';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// const app = express();
// connectDB();
// app.use(bodyParser.json());
// app.use('/api/auth', require('./routes/auth').default);
// app.use('/api/employees', require('./routes/employee').default);
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./routes/auth"));
const employee_1 = __importDefault(require("./routes/employee"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, db_1.default)();
app.use((0, cors_1.default)()); // Add this line to enable CORS
app.use(express_1.default.json());
app.use('/api/auth', auth_1.default);
app.use('/api/employees', employee_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//# sourceMappingURL=server.js.map