import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Login = (props) => {
    // Form info here
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    // Errors for validations
    const [errors, setErrors] = useState({});
    // History option for redirects
    const history = useHistory();
    // Handler for input changes
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    // Handler for submitting the form and the info
    const onSubmitHandler = (event) => {
        // axios call to find user
        axios.get("http://localhost:8000/api/user/findOne/:email", form)
            .then(res => {
                console.log(res)
                // Use history to redirect to home page
            })
            .catch(err => {
                setErrors(err.response.data.err.errors);
            })
    }
    return (
        <div>
            <h1 className='display-4 my-5'>Login</h1>
            <div className='mx-auto my-5' style={{ width: "700px" }}>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={onChangeHandler}/>
                        <label htmlFor="floatingInput">Email address</label>
                        <span className='alert-danger'>{errors.firstName && errors.firstName.message}</span>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  onChange={onChangeHandler}/>
                        <label htmlFor="floatingPassword">Password</label>
                        <span className='alert-danger'>{errors.firstName && errors.firstName.message}</span>
                    </div>
                    <input className='btn btn-primary' type="submit"/>
                </form>
                <p className='mt-2'>New to the group? Register <Link to={"/register"}>Here</Link></p>
            </div>
        </div>
    )
}

export default Login;