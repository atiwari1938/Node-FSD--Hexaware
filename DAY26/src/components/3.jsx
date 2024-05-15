import React, { Component } from 'react';
import axios from 'axios';

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
      error: ''
    };
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
    let url = "https://reqres.in/api/users/";
    axios.get(url)
      .then((resData) => {
        console.log(resData.data.data);
        this.setState({ users: resData.data.data });
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        this.setState({ error: 'Error fetching users.', loading: false });
      });
    this.setState({ loading: true });
  }

  render() {
    var resultArray = this.state.users.map((item, index) =>
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.email}</td>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td><img src={item.avatar} alt="Avatar" /></td>
      </tr>
    );

    return (
      <div>
        <h2>User Details</h2>
        <button onClick={this.fetchUsers}>Fetch Users</button>
        <hr />
        <div>
          <table border={2} cellPadding={5} cellSpacing={0} width={700}>
            <tbody>
              <tr>
                <th>id</th>
                <th>email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Avatar</th>
              </tr>
              {resultArray}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserDetail;
