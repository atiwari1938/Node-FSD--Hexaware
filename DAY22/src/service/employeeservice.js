import axios from 'axios';

const URL = 'http://localhost:5000/api/employees/';

const EmployeeService = {

    fetchEmployees: async () =>{
        const response=await axios.get(URL);
        return response.data;
    },
  getAllEmployees: async () => {
      const response = await axios.get(URL);
      return response.data;
  },

  createEmployee: async (employeeData) => {
      await axios.post(URL, employeeData);
  },

  updateEmployee: async (id, employeeData) => {
      await axios.put(URL+id);
  },

  deleteEmployee: async (id) => {
      await axios.delete(URL + id);
  },
};

export default EmployeeService;
