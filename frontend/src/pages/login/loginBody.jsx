import close_eye from '../../assets/svgs/close-eye.svg';
import open_eye from '../../assets/svgs/open-eye.svg';
import changeVidible from '../../utils/buttons'

function LoginBody({userLogin,email,setEmail,visible,setPassword,password,errMsg,setVisible}) {
    console.log('hello world')
    return (
        <div class="form-body">
            <form onSubmit={userLogin}>
                <div class="email">
                    <label for="name">Emails</label><br />
                    <input type="email" value={email} placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="password">
                    <label for="name">Password</label><br />
                    <input type={visible ? `password` : 'text'} placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <img src={visible ? close_eye : open_eye} alt="close-eye" class="close-eye" onClick={()=>changeVidible(visible,setVisible)} />
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
    )
}
export default LoginBody;