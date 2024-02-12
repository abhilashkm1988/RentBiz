import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import InputType from '../components/shared/form/InputType';
import Button from '../components/shared/form/Button';
import API from '../services/API';
const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'; 

    const emailRef = useRef();   

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    //const [errorMsg, setErrorMsg] = useState("");
    const handleSubmit = async() => {
        var data = { email: email, password: password };
        console.log(data);
        try{
            const response = await API.post('/api/user/authenticate',data);
            if(response.data.success){
                console.log(response.data.value);
                localStorage.setItem("token",response.data.value.token);
                setAuth({token:response.data.value.token, user : response.data.user});
            }
            setEmail("");
            setPassword("");
            setRememberMe(false);
            navigate(from, {replace: true});
        }catch(err){
            console.error(err);
        }
      
    }


    useEffect(() => {
        emailRef.current.focus();

    }, []);

    //useEffect(() => {
       // setErrorMsg("");
    //}, [email, password]);

    return (
        <> <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">
                    <div className="login-box">
                        <div className="login-logo">
                            <a href="../../index2.html"><b>Rent</b> Biz</a>
                        </div>
                        {/* /.login-logo */}
                        <div className="card">
                            <div className="card-body login-card-body">
                                <p className="login-box-msg">Sign in to start your session</p>
                                <div className="input-group mb-3">
                                    <InputType inputType={'email'}
                                        controlRef={emailRef}
                                        name={'email'}
                                        value={email}
                                        placeholder={'you@domain.com'}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={'form-control'} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <InputType inputType={'passsword'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        name={'password'} placeholder={'mysecretpassword'} className={'form-control'} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <InputType inputType={'checkbox'}
                                                value={rememberMe}
                                                onChange={(e) => setRememberMe(e.target.value)}
                                                name={'rememberMe'} placeholder={'you@domain.com'} className={''} />
                                            <label htmlFor="remember">
                                                &nbsp; Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <Button className={'btn btn-primary btn-block'} buttonText={'Login'} handleClick={handleSubmit} />
                                    </div>
                                    {/* /.col */}
                                </div>
                            </div>
                            {/* /.login-card-body */}
                        </div>
                    </div>
                    {/* /.login-box */}
                </div>
            </div>
        </div>
        </>
    );
}


export default Login