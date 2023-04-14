import React from 'react'
// import './Signup.css'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { Auth } from '../../../Firebase/FirebaseApi'


const Signup = () => {
    let signupHandle = () => {

    }

    return (
        <div className='container'>
            <div className="box">
                <div className="row">
                    <div className="col-sm-5 col-xs-1 box1">
                        <div className="inline-text">
                            <h1>Signup</h1>
                            <p>
                                Get access to your Orders,<br />
                                Wishlist and<br />
                                Recomadations
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-1 box2">
                        <form onSubmit={signupHandle}>
                            <div className="user-id user-data">
                                <input type="email " name="" id="" required="" placeholder='Enter Email' />
                            </div>
                            <div className="user-id user-data">
                                <input type="password" name="" id="" required="" placeholder='Enter Password' />
                            </div>
                            <div className="user-id button">
                                <input type="submit" name="" id="" value="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Signup