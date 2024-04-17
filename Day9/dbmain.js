const department =require('./src/service/department.js');
const employee =require('./src/service/employee.js');




department.createDepartment('Sales');
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
department.createDepartment('Marketing');
department.createDepartment('Advertising');
department.displayDepartments();
department.deleteDepartment(2);
department.deleteDepartment(1);



employee.createEmp('Ankit', 1);
employee.createEmp('Amit', 2);
employee.createEmp('Raghav', 3);
employee.displayEmp();
//employee.displayEmp();
employee.createEmp('Raghav2', 32);
employee.deleteEmployee(32);