import React from 'react'
import { useState } from 'react'
import Display from './Display';

const Input = () => {
    let [textBoxValue, setTextBoxValue] = useState('');
    let [addToDo, setAddToDo] = useState('');

    function add() {
        setAddToDo(textBoxValue);
        console.log(addToDo);
        setTextBoxValue('');
    }

    return (
        <div>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-top h-100">
                        <div className="col">
                            <div className="card" id="list1" style={{ borderRadius: ".75rem", backgroundColor: " #eff1f2" }}>
                                <div className="card-body py-4 px-4 px-md-5">

                                    <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                                        <span>ToDo</span>
                                    </p>

                                    <div className="pb-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex flex-row align-items-center">
                                                    <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
                                                        placeholder="Add new..." onChange={e => setTextBoxValue(e.target.value)} />
                                                    <a href="#!" data-mdb-toggle="tooltip" title="Set due date"><i
                                                        className="fas fa-calendar-alt fa-lg me-3"></i></a>
                                                    <div>
                                                        <button type="button" className="btn btn-primary" onClick={() => { add() }}>Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Display />
            </section >
        </div >
    )
}

export default Input