import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginHeader from './loginHeader';
import LoginBody from './loginBody';
import LoginFooter from './loginFooter';

function Login(){

    const [visible,setVisible] = useState(true);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errMsg,setErrMsg] = useState(null)
    const navigate = useNavigate();

    //post login information
    const userLogin = async (e)=>{
        e.preventDefault();
        try{
            const user = await axios.post("http://localhost:5001/api/v1/user/login", {email,password})
            console.log(user)
            localStorage.setItem('token', user.data.token);
            setErrMsg(null)
            navigate('/dashboard')
        }
        catch(err){ 
            setErrMsg(err.response.data.message)
        }
    }

    return(
        <div class="container">
            <div class="login-form">
                <LoginHeader />
                <LoginBody userLogin={userLogin} email={email} setEmail={setEmail} visible={visible} setPassword={setPassword} password={password} setVisible={setVisible} errMsg={errMsg} />
                <LoginFooter />
            </div>
        </div>
    )
}

export default Login;