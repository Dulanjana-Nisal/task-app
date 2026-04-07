import { Link } from "react-router-dom";

function LoginFooter() {
    return (
        <div class="form-footer">
            <p>Dont have an account <Link to="/register">Register</Link></p>
        </div>
    )
}

export default LoginFooter;