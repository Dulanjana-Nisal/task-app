import './login.css'

const Login = ()=>{
    return(
        <div class="container">
            <div class="login-form">
                <div class="form-header">
                    <h1>Welcome Back !</h1>
                    <p>Please enter your details for login</p>
                </div>
                <div class="form-body">
                    <form action="#" method="post">
                        <div class="email">
                            <label for="name">Email</label><br />
                            <input type="email" placeholder="Enter your Email" />
                        </div>
                        <div class="password">
                            <label for="name">Password</label><br />
                            <input type="password" placeholder="Enter your Password" />
                            <img src="../images/svgs/close-eye.svg" alt="close-eye" class="close-eye" />
                            <img src="../images/svgs/open-eye.svg" alt="open-eye" class="open-eye" />
                        </div>
                        <div class="messages">
                            <p>Some Error messages here</p>
                        </div>
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