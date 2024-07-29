import { Request, Response } from 'express';
import Employee, { IEmployee } from '../models/employee';

export const createEmployee = async (req: Request, res: Response) => {
  const { image, name, email, mobile, designation,gender,course } = req.body;
  try {
    const newEmployee: IEmployee = new Employee({
      name, 
      email, 
      mobile, 
      designation, 
      gender,
      course, 
      image,
    });

    const employee = await newEmployee.save();
    res.json(employee);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }
    res.json(employee);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  const { image, name, email, mobile, designation,gender,course } = req.body;
  const updatedEmployee = { image, name, email, mobile, designation,gender,course };

  try {
    let employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    employee = await Employee.findByIdAndUpdate(req.params.id, { $set: updatedEmployee }, { new: true });
    res.json(employee);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    let employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    await Employee.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Employee removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

