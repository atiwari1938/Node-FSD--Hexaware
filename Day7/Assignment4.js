const axios = require('axios');

async function getCustomerByCountry(country) {
  try {
    const response = await axios.get('https://www.w3schools.com/angular/customers.php');
    const customerarr=response.data.records;
    const customers = customerarr.filter(customer => customer.Country === country);
    return customers;
  } catch (error) {
    console.error('Error fetching customer data:', error.message);
    throw new Error('Failed to fetch customer data');
  }
}

async function main() {
  try {
    const customers = await getCustomerByCountry('Mexico');
    console.log('Customers from Mexico:', customers);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
