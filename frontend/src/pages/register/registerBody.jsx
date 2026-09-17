import close_eye from '../../assets/svgs/close-eye.svg';
import open_eye from '../../assets/svgs/open-eye.svg';
import changeVidible from '../../utils/buttons'

function RegisterBody({userRegister,name,setName,email,setEmail,visible,password,setPassword,setVisible,errMsg}) {
    return (
        <div class="form-body">
            <form onSubmit={userRegister}>
                <div class="name">
                    <label for="name">Name</label><br />
                    <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="email">
                    <label for="name">Email</label><br />
                    <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
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

export default RegisterBody;