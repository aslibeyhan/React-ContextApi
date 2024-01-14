import React, { Component } from 'react'

class User extends Component {
  render() {
    //Destructing
    const {name,department}=this.props
    return (
      // <div>
      //   <ul>
      //     <li>İsim :{this.props.name}</li>
      //     <li>Departman : {this.props.department}</li>
      //   </ul>
      // </div>
      <div>
      <ul>
        <li>İsim :{name}</li>
        <li>Departman : {department}</li>
      </ul>
    </div>
    )
  }
}

export default User;