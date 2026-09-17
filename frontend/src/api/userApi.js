import api from './api';

//user login api
export const userApiLogin = async (email, password, setErrMsg, navigate) => {
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

//user register api
export const userApiRegister = async (name, email, password, setErrMsg, navigate) => {
    try {
        const user = await api.post("http://localhost:5001/api/v1/user/register", { name, email, password })
        console.log(user)
        setErrMsg(null)
        navigate('/login')
    }
    catch (err) {
        console.log(err.response.data.message)
        setErrMsg(err.response.data.message)
    }
};