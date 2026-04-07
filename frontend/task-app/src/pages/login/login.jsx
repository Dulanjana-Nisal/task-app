import './login.css';
import close_eye from '../../assets/svgs/close-eye.svg';
import open_eye from '../../assets/svgs/open-eye.svg';
import { useState } from 'react';
import axios from 'axios';

function Login(){
    const [visible,setVisible] = useState(true);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errMsg,setErrMsg] = useState(null)

    //post login information
    const userLogin = async (e)=>{
        e.preventDefault();
        try{
            const user = await axios.post("http://localhost:5001/api/v1/user/login", {email,password})
            console.log(user)
            localStorage.setItem('token', user.data.token);
            setErrMsg(null)
        }
        catch(err){ 
            setErrMsg(err.response.data.message)
            console.log(err.response.data.message)
        }
    }

    //visible button
    function changeVidible(){
        visible ? setVisible(false) : setVisible(true)
    }

    return(
        <div class="container">
            <div class="login-form">
                <div class="form-header">
                    <h1>Welcome Back !</h1>
                    <p>Please enter your details for login</p>
                </div>
                <div class="form-body">
                    <form onSubmit={userLogin}>
                        <div class="email">
                            <label for="name">Email</label><br />
                            <input type="email" value={email} placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div class="password">
                            <label for="name">Password</label><br />
                            <input type={visible ? `password` : 'text'} placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <img src={visible ? close_eye : open_eye} alt="close-eye" class="close-eye" onClick={changeVidible}/>
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
                    <p>Dont have an account <a href="../register/register.html">Register</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login;