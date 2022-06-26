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
        confirm: "",
        subscribe: false
    });
    // Errors for validations
    const [errors, setErrors] = useState({});
    // History option for redirects
    const history = useHistory();
    // Handler for input changes
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }
    // Password compare
    const passValid = (input) => {
        if(input.password !== input.confirm){
            return false;
        } else {
            return true;
        }
    }
    // Handler for submitting the form and the info
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // axios call to go here / NEEDS EDITED FOR PASSWORD HASH
        axios.post("http://localhost:8000/api/user/create", form)
            .then(res => {
                // Use history to redirect to the home page
                history.push("/");
            })
            .catch(err => {
                setErrors(err.response.data.err.errors);
            })
    }
    return (
        <div>
            <h1 className='display-4 my-5'>Register New User</h1>
            <div className='mx-auto my-5' style={{ width: "700px" }}>
                <form onSubmit={onSubmitHandler}>
                    <div className='d-flex mb-3'>
                        <div className="form-floating me-2 w-100">
                            <input name='firstName' type="text" className="form-control" id="floatingFirstName" placeholder="First Name" onChange={onChangeHandler}/>
                            <label htmlFor="floatingInput">First Name</label>
                            <span className='alert-danger'>{errors.firstName && errors.firstName.message}</span>
                        </div>
                        <div className="form-floating ms-2 w-100">
                            <input name='lastName' type="text" className="form-control" id="floatingLastName" placeholder="Last Name" onChange={onChangeHandler}/>
                            <label htmlFor="floatingInput">Last Name</label>
                            <span className='alert-danger'>{errors.lastName && errors.lastName.message}</span>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input name='email' type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={onChangeHandler}/>
                        <label htmlFor="floatingInput">Email address</label>
                        <span className='alert-danger'>{errors.email && errors.email.message}</span>
                    </div>
                    <div className="form-floating mb-3">
                        <input name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={onChangeHandler}/>
                        <label htmlFor="floatingPassword">Password</label>
                        <span className='alert-danger'>{errors.password && errors.password.message}</span>
                    </div>
                    <div className="form-floating mb-3">
                        <input name='confirm' type="password" className="form-control" id="floatingConfirm" placeholder="Confirm Password" onChange={onChangeHandler}/>
                        <label htmlFor="floatingConfirm">Confirm Password</label>
                        {passValid(form.confirm) && form.confirm !== form.password && <span className="alert-danger">Passwords do not match</span>}
                    </div>
                    <div className="mb-2">
                        <input name='subscribe' className='me-2' type="checkbox" onChange={onChangeHandler}/>
                        <label htmlFor="subscribe">Subscribe to newsletter?</label>
                    </div>
                    <div className="col-12">
                        <button className='btn btn-primary'>Register User</button>
                    </div>
                </form>
                <p className='mt-2'>Already have an account? Login <Link to={"/login"}>here</Link></p>
            </div>
        </div>
    )
}

export default Register;