import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchUsers from '../actions/fetchUsers'

const SearchUsers = class extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []}
}



  componentWillMount() {
    console.log('working')
    debugger
    this.props.onLoad.fetchUsers().then( (response)=> {
      debugger
      this.setState({users: response})
      console.log(this.state.users)
      debugger
      })
    //get all cities
    //get all users
  }
  debugger
  // var usersListed = this.state.users.payload.data.map( (user)=> {
  //     debugger
  //         return(  <tr>
  //             <td>{user.attributes.name}</td>
  //             <td>{user.attributes.company}</td>
  //             <td>{user.attributes.position}</td>
  //             <td>{user.attributes.location.city}</td>
  //             <td>{user.attributes["email-address"]}</td>
  //           </tr>)
  //         }
  //         )


  render(){


    return(
      <div>
    <div data-role="header">
      <h1>Search Alumni</h1>
    </div>

  <select id="filterTable-City">
  <option>NYC</option>
  <option>Houston</option>
  <option>Seattle</option>
  </select>
  <select>
  <option>25 miles</option>
  <option>50 miles</option>
  <option>100 miles</option>
  </select>

      <table data-role="table" data-mode="columntoggle" class="ui-responsive ui-shadow" id="myTable" data-filter="true" data-input="#filterTable-City">
        <thead>
          <tr>
            <th data-priority="1">Name</th>
            <th data-priority="2">Company</th>
            <th data-priority="3">Position</th>
            <th data-priority="4">City</th>
            <th data-priority="5">Email</th>
          </tr>
        </thead>
        <tbody>

          </tbody>
        </table>
      </div>
    )
  }
}


 const SearchUsersContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUsers)

function mapStateToProps(state) {
  return {userLocations: state.userLocations, userList: state.userList}
}

function mapDispatchToProps(dispatch) {
  return { onLoad: bindActionCreators({fetchUsers}, dispatch) }
}

export default SearchUsersContainer
