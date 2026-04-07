import './register.css';
import close_eye from '../../assets/svgs/close-eye.svg';
import open_eye from '../../assets/svgs/open-eye.svg';
import { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

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

    //visible button
    function changeVidible() {
        visible ? setVisible(false) : setVisible(true)
    }

    return (
        <>
            <div class="container">
                <div class="login-form">
                    <div class="form-header">
                        <h1>Register</h1>
                        <p>Please enter your details for Register</p>
                    </div>
                    <div class="form-body">
                        <form onSubmit={userRegister}>
                            <div class="name">
                                <label for="name">Name</label><br />
                                <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
                            </div>
                            <div class="email">
                                <label for="name">Email</label><br />
                                <input type="email" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div class="password">
                                <label for="name">Password</label><br />
                                <input type={visible ? `password` : 'text'} placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                <img src={visible ? close_eye : open_eye} alt="close-eye" class="close-eye" onClick={changeVidible} />
                            </div>
                            {
                                errMsg &&
                                <div class="messages">
                                    <p>{errMsg}</p>
                                </div>
                            }
                            <div class="btn">
                                <input type="submit" value="Sign in" />
                            </div>
                        </form>
                    </div>
                    <div class="form-footer">
                        <p>Already have an account <Link to="/login">Sign in</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;