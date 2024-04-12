const axios = require('axios');
// async Function to fetch user data from the API
async function fetchUserData() {
    try {
      const response = await axios.get('https://reqres.in/api/users/');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      throw new Error('Failed to fetch user data');
    }
  }

  function displayUserData(users) {
    console.log('User Data:');
    users.forEach(user => {
      console.log(`ID: ${user.id}, Name: ${user.first_name} ${user.last_name}, Email: ${user.email}`);
    });
  }
  
  // Main function
  async function main() {
    try {
      const users = await fetchUserData();
      displayUserData(users);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Call the main function
  main();
  
