const CustomerDetails = ({ name, email, phone }) => {
    return (
      <div className="customer-details">
        <h2>Customer Details</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone:{phone}</p>
      </div>
    );
  };
  
  export default CustomerDetails;