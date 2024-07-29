"use strict";
// import mongoose, { Document, Schema } from 'mongoose';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// export interface IEmployee extends Document {
//   name: string;
//   email: string;
//   mobile: string;
//   designation: string;
//   gender: string;
//   course: string;
//   image: string;
// }
// const EmployeeSchema: Schema = new Schema({
//   image: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   mobile: {
//     type: String,
//     required: true,
//   },
//   designation: {
//     type: String,
//     required: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
//   course: {
//     type: String,
//     required: true,
//   }
// });
// export default mongoose.model<IEmployee>('Employee', EmployeeSchema);
const mongoose_1 = __importStar(require("mongoose"));
const EmployeeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    course: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
exports.default = mongoose_1.default.model('Employee', EmployeeSchema);
//# sourceMappingURL=employee.js.map