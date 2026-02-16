import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  calculateSalary,
  getJoiningDate,
  getDepartment
} from "../controllers/employeeController.js";

const router = express.Router();

router.post("/", createEmployee);
router.get("/", getEmployees);
router.get("/:id", getEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

router.get("/:id/payroll", calculateSalary);
router.get("/:id/joiningDate", getJoiningDate);
router.get("/:id/department", getDepartment);
export default router;