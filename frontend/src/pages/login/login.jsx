import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from './loginHeader';
import LoginBody from './loginBody';
import LoginFooter from './loginFooter';
import {userApiLogin} from '../../api/userApi';

function Login(){

    const [visible,setVisible] = useState(true);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errMsg,setErrMsg] = useState(null)
    const navigate = useNavigate();

    //post login information
    const userLogin = async (e)=>{
        e.preventDefault();
        userApiLogin(email,password,setErrMsg,navigate)
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