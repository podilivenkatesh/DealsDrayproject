import express from 'express';
import auth from '../middleware/auth';
import {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} from '../controllers/employeecontroller';

const router = express.Router();

router.post('/', auth, createEmployee);
router.get('/', auth, getEmployees);
router.get('/:id', auth, getEmployeeById);
router.put('/:id', auth, updateEmployee);
router.delete('/:id', auth, deleteEmployee);

export default router;
