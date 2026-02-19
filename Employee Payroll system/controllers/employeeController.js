import Employee from "../models/employeeModel.js";

// GET /employees
export const viewEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.render("employee-details", { employees });
  } catch (error) {
    next(error);
  }
};

// GET /employees/add
export const viewAddForm = (req, res) => {
  res.render("payroll-form", { employee: null });
};

// GET /employees/:id/view
export const viewEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.redirect("/employees");
    res.render("employee-profile", { employee });
  } catch (error) {
    next(error);
  }
};

// GET /employees/:id/edit
export const viewEditForm = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.redirect("/employees");
    res.render("payroll-form", { employee });
  } catch (error) {
    next(error);
  }
};

// POST /employees/add
export const submitAddForm = async (req, res, next) => {
  try {
    const { name, email, avatar, gender, department, salary, startDay, startMonth, startYear, notes } = req.body;
    await Employee.create({
      name,
      email,
      avatar: avatar || null,
      gender,
      departments: Array.isArray(department) ? department : department ? [department] : [],
      salary: Number(salary),
      startDay: Number(startDay),
      startMonth: Number(startMonth),
      startYear: Number(startYear),
      notes: notes || "",
    });
    res.redirect("/employees");
  } catch (error) {
    next(error);
  }
};

// POST /employees/:id/edit
export const submitEditForm = async (req, res, next) => {
  try {
    const { name, email, avatar, gender, department, salary, startDay, startMonth, startYear, notes } = req.body;
    await Employee.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        avatar: avatar || null,
        gender,
        departments: Array.isArray(department) ? department : department ? [department] : [],
        salary: Number(salary),
        startDay: Number(startDay),
        startMonth: Number(startMonth),
        startYear: Number(startYear),
        notes: notes || "",
      },
      { new: true, runValidators: true }
    );
    res.redirect(`/employees/${req.params.id}/view`);
  } catch (error) {
    next(error);
  }
};

// POST /employees/:id/delete
export const submitDelete = async (req, res, next) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.redirect("/employees");
  } catch (error) {
    next(error);
  }
};

export const createEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({ success: true, data: employee });
  } catch (error) {
    next(error);
  }
};

export const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({ success: true, count: employees.length, data: employees });
  } catch (error) {
    next(error);
  }
};

export const getEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ success: false, message: "Employee not found" });
    res.status(200).json({ success: true, data: employee });
  } catch (error) {
    next(error);
  }
};

export const updateEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!employee) return res.status(404).json({ success: false, message: "Employee not found" });
    res.status(200).json({ success: true, data: employee });
  } catch (error) {
    next(error);
  }
};

export const deleteEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ success: false, message: "Employee not found" });
    res.status(200).json({ success: true, message: "Employee deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const calculateSalary = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ success: false, message: "Employee not found" });
    const basic = employee.salary;
    const hra = basic * 0.20;
    const da  = basic * 0.10;
    const pf  = basic * 0.05;
    const netSalary = basic + hra + da - pf;
    res.status(200).json({ success: true, payroll: { basic, hra, da, pf, netSalary } });
  } catch (error) {
    next(error);
  }
};