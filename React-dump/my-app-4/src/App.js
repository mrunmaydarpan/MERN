import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createRef } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.nameRef = createRef()
    this.emailRef = createRef()
    this.passwordRef = createRef()
    this.confirmPasswordRef = createRef()
  }
  handleData = (e) => {
    e.preventDefault();

    let name = this.nameRef.current.value;
    console.log(name)
  }
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleData}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Enter name" required ref={this.nameRef} />
            <label className='mt-3'>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" required ref={this.emailRef} />
            <label className='mt-3'>Password</label>
            <input type="password" className="form-control" placeholder="Password" required ref={this.passwordRef} />
            <label className='mt-3'>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm Password" required ref={this.confirmPasswordRef} />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    );
  }
}