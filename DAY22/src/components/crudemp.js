import { useState} from 'react';
import EmployeeService from '../service/employeeservice';

function EmployeeCRUD() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({ name: '', job: '', salary: '' });

  const fetchEmployees = async () => {
    const emp= await EmployeeService.fetchEmployees();
    setEmployees(emp);
   
  };
  const getEmployees = async () => {
      const data = await EmployeeService.getAllEmployees();
      setEmployees(data);
  };

  const CreateEmployee = async () => {
      await EmployeeService.createEmployee(formData);
      setFormData({ name: '', job: '', salary: '' });
      getEmployees();
  };

  const UpdateEmployee = async (id) => {
      await EmployeeService.updateEmployee(id, formData);
      setFormData({ name: '', job: '', salary: '' });
      getEmployees();
   
  };

  const DeleteEmployee = async (id) => {
      await EmployeeService.deleteEmployee(id);
      getEmployees();

  };

  return (
    <div>
      <h2>Employee Management</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <label>Job:</label>
        <input type="text" value={formData.job} onChange={(e) => setFormData({ ...formData, job: e.target.value })} />
        <label>Salary:</label>
        <input type="text" value={formData.salary} onChange={(e) => setFormData({ ...formData, salary: e.target.value })} />
        <button type="button" onClick={CreateEmployee}>Add Employee</button>
        <label>Get Employees</label>
        <button onClick={fetchEmployees}>Get Employees</button>
      </form>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name}, {emp.job}, Salary: {emp.salary}
            <button onClick={() => UpdateEmployee(emp.id)}>Update</button>
            <button onClick={() => DeleteEmployee(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeCRUD;
