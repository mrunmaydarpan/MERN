import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            user: [],
            display: true
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     return { name: props.data }
    // }
    componentDidMount() {
        let url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url).then((a) => a.json()).then(a => this.setState({ data: a })).catch(err => console.log(err));
    }

    detailfetch = (data) => {
        console.log(data);
        this.setState({ user: data });
    }

    getSnapshotBeforeUpdate(prevprops, prevstate) {
        return prevstate;
    }

    componentDidUpdate(prevprops, prevstate, snapshot) {
        console.log(snapshot);
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm'>
                        <table className='table table-striped table-hover w-3'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>Id</th>
                                    <th>name</th>
                                    <th>username</th>
                                    <th>email</th>
                                    <th>phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map(a => {
                                    return (
                                        <tr key={a.id}>
                                            <td>{a.id}</td>
                                            <td>{a.name}</td>
                                            <td>{a.username}</td>
                                            <td>{a.email}</td>
                                            <td>{a.phone}</td>
                                            <td>
                                                <button className='btn btn-primary'
                                                    onClick={() => {
                                                        this.detailfetch(a);
                                                    }}
                                                >details</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-sm card'>
                        <div className='card-body bg-dark text-white h-50'>
                            <table className='w-2' cellPadding='3px'>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>name:</td>
                                        <td>{this.state.user.name}</td>
                                    </tr>
                                    <tr>
                                        <td>username:</td>
                                        <td>{this.state.user.username}</td>
                                    </tr>
                                    <tr>
                                        <td>email:</td>
                                        <td>{this.state.user.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        {/* <td>{th }</td> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}