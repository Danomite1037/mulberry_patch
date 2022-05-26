import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Register = (props) => {
    // Form info here
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        subscribe: false
    });
    // Errors for validations
    const [errors, setErrors] = useState({});
    // History option for redirects
    const history = useHistory();
    // Handler for anything that changes in the inputs
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    // Handler for submitting the form and the info
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // axios call to go here / NEEDS EDITED FOR PASSWORD HASH
        // axios.post("http://localhost:8000/api/user/create", form)
        //     .then(res => {
        //         // Use history to redirect to the home page
        //         history.push("/");
        //     })
        //     .catch(err => {
        //         setErrors(err.response.data.err.errors);
        //     })
    }
    return (
        <div>
            <h1 className='display-4 my-5'>Register New User</h1>
            <div className='mx-auto my-5' style={{ width: "700px" }}>
                <form onSubmit={onSubmitHandler}>
                    <div className='d-flex mb-3'>
                        <div className="form-floating me-2 w-100">
                            <input name='firstName' type="text" className="form-control" id="floatingInput" placeholder="First Name" onChange={onChangeHandler}/>
                            <label htmlFor="floatingInput">First Name</label>
                            <span className='alert-danger'>{errors.name && errors.name.message}</span>
                        </div>
                        <div className="form-floating ms-2 w-100">
                            <input name='lastName' type="text" className="form-control" id="floatingInput" placeholder="Last Name" onChange={onChangeHandler}/>
                            <label htmlFor="floatingInput">Last Name</label>
                            <span className='alert-danger'>{errors.name && errors.name.message}</span>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input name='email' type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={onChangeHandler}/>
                        <label htmlFor="floatingInput">Email address</label>
                        <span className='alert-danger'>{errors.name && errors.name.message}</span>
                    </div>
                    <div className="form-floating mb-3">
                        <input name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={onChangeHandler}/>
                        <label htmlFor="floatingPassword">Password</label>
                        <span className='alert-danger'>{errors.name && errors.name.message}</span>
                    </div>
                    <div className="form-floating mb-3">
                        <input name='confirm' type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password"/>
                        <label htmlFor="floatingPassword">Confirm Password</label>
                        <span className='alert-danger'>{errors.name && errors.name.message}</span>
                    </div>
                    <div className="mb-3">
                        <input className='me-2' type="checkbox"/>
                        <label htmlFor="subscribe">Subscribe to newsletter?</label>
                    </div>
                    <div class="col-12">
                        <button className='btn btn-primary'>Register User</button>
                    </div>
                </form>
            </div>
            <p>Already have an account? Login <Link to={"/login"}>here</Link></p>
        </div>
    )
}

export default Register;