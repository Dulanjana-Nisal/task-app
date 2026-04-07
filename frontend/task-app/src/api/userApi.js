import api from './api';

const userApiLogin = async (email,password,setErrMsg,navigate) => {
    try {
        const user = await api.post("http://localhost:5001/api/v1/user/login", { email, password })
        console.log(user)
        localStorage.setItem('token', user.data.token);
        setErrMsg(null)
        navigate('/dashboard')
    }
    catch (err) {
        setErrMsg(err.response.data.message)
    }
}

export default userApiLogin;