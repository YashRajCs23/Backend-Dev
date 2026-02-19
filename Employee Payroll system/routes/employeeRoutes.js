import express from "express";
import {
  // View controllers
  viewEmployees,
  viewAddForm,
  viewEmployee,
  viewEditForm,
  submitAddForm,
  submitEditForm,
  submitDelete,
  // API controllers
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  calculateSalary,
} from "../controllers/employeeController.js";

const router = express.Router();

//  VIEW ROUTES  (browser / EJS pages) Base: /employees
router.get("/",                  viewEmployees);   // List all employees
router.get("/add",               viewAddForm);     // Show add form
router.post("/add",              submitAddForm);   // Submit add form
router.get("/:id/view",          viewEmployee);    // Single employee profile
router.get("/:id/edit",          viewEditForm);    // Show edit form
router.post("/:id/edit",         submitEditForm);  // Submit edit form
router.post("/:id/delete",       submitDelete);    // Delete employee

//  API ROUTES  (JSON responses) Base: /api/employees
router.post("/api",              createEmployee);
router.get("/api",               getEmployees);
router.get("/api/:id",           getEmployee);
router.put("/api/:id",           updateEmployee);
router.delete("/api/:id",        deleteEmployee);
router.get("/api/:id/payroll",   calculateSalary);

export default router;