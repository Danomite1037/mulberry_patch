import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [form, setForm] = useState();
    return (
        <div>
            <h1 className='display-4 my-5'>Login</h1>
            <div className='mx-auto my-5' style={{ width: "700px" }}>
                <form>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <input className='btn btn-primary' type="submit"/>
                </form>
                <p>New to the group? Register <Link to={"/register"}>Here</Link></p>
            </div>
        </div>
    )
}

export default Login;