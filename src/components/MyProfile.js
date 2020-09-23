import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state={
    name:'',
    genders: ["Male","Female"],
    description: ''
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  handleSubmit = (event) => {
    event.preventDefault();
    //call api
    console.log(JSON.stringify(this.state));
  }

  render() {
    return (
      <form className = {'myprofile'} onSubmit={this.handleSubmit}>
        <h1 >My Profile</h1>
        <label id={'mylabel'}>
          <p>Name</p>
          <input id={'myinput'} type='text' name='name' placeholder='Your Name' onChange={this.handleChange} value={this.state.name}/>  
        </label>
        <label id={'mylabel'}>
          <p>Gender</p>
          <select id={'myinput'} name='genders' onChange={this.handleChange} value={this.state.genders} >
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>
        <label id={'mylabel'}>
          <p>Description</p>
          <input id={'myinput2'} type='text' name='desctiption' placeholder='Description about yourself'  onChange={this.handleChange} value={this.state.description}/>  
        </label>
        <label id={'mylabel2'}><input type='checkbox' name='checkbox' />I have read the terms of conduct</label>
        <input 
          id={'mysubmit'} 
          type='submit' 
          value='Submit'
          disabled={!this.state.name&&!this.state.gender&&!this.state.description}/>
      </form>
    );
  }
}

export default MyProfile;


