import './register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterHeader from './registerHeader';
import RegisterFooter from './registerFooter';
import RegisterBody from './registerBody';
import {userApiRegister} from '../../api/userApi';

function Register() {
    const [visible, setVisible] = useState(true);
    const [email, setEmail] = useState("");
    const [name,setName] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState(null)
    const navigate = useNavigate();

    //post register information
    const userRegister = async (e) => {
        e.preventDefault();
        userApiRegister(name,email,password,setErrMsg,navigate)
    }

    return (
        <>
            <div class="container">
                <div class="login-form">
                    <RegisterHeader />
                    <RegisterBody userRegister={userRegister} setName={setName} name={name} email={email} setEmail={setEmail} visible={visible} password={password} setPassword={setPassword} setVisible={setVisible}  errMsg={errMsg}/>
                    <RegisterFooter />
                </div>
            </div>
        </>
    )
}

export default Register;