import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='container'>
            <div className="box">
                <div className="row">
                    <div className="col-sm-5 col-xs-1 box1">
                        <div className="inline-text">
                            <h1>Login</h1>
                            <p>
                                Get access to your Orders,<br />
                                Wishlist and<br />
                                Recomadations
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-1 box2">
                        <div className="user-id user-data">
                            <input type="email " name="" id="" required="" placeholder='Enter Email' />
                        </div>
                        <div className="user-id user-data">
                            <input type="password" name="" id="" required="" placeholder='Enter Password'/>
                        </div>

                        <div className="user-id button">
                            <input type="submit" name="" id="" value="Login" />
                        </div>
                        <div className="user-id">
                            <p>OR</p>
                        </div>
                        <div className="user-id button">
                            <input type="reset" name="" id="" value="Request OTP" />
                        </div>
                        <div className="user-id">
                            <p className="footer"><a href="#">New to Flipkart? Create an account</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login