import React, { useRef } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let confirmPasswordRef = useRef();

  let handleData = (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    let confirmPassword = confirmPasswordRef.current.value;
    if (password === confirmPassword) {
      console.log(name, email, password);
    }
  }

  return (
    <form onSubmit={handleData}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" placeholder="Enter name" required ref={nameRef} />
        <label className='mt-3'>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" required ref={emailRef} />
        <label className='mt-3'>Password</label>
        <input type="password" className="form-control" placeholder="Password" required ref={passwordRef} />
        <label className='mt-3'>Confirm Password</label>
        <input type="password" className="form-control" placeholder="Confirm Password" required ref={confirmPasswordRef} />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>
  );
}

export default App;
