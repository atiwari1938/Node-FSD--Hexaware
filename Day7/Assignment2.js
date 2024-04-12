const axios = require('axios');


function fetchUserData() {
  return axios.get('https://reqres.in/api/users/')
    .then(response => response.data.data)
    .catch(error => {
      throw new Error('Failed to fetch user data');
    });
}


fetchUserData()
  .then(users => {
    console.log('User Data:');
    users.forEach(user => {
      console.log(`ID: ${user.id}, Name: ${user.first_name} ${user.last_name}, Email: ${user.email}`);
    });
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
