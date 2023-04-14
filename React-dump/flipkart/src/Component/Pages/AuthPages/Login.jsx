import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='container mt-5 col-3 pt-5 card'>
            <form className='cardbody'>
                <h2>Login</h2>
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" />
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
            </form>
        </div>
    )
}

export default Login