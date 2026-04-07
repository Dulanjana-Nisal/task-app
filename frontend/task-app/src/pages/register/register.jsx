import './register.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RegisterHeader from './registerHeader';
import RegisterFooter from './registerFooter';
import RegisterBody from './registerBody';

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
        try {
            const user = await axios.post("http://localhost:5001/api/v1/user/register", {name, email, password })
            console.log(user)
            setErrMsg(null)
            navigate('/login')
        }
        catch (err) {
            console.log(err.response.data.message)
            setErrMsg(err.response.data.message)
        }
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