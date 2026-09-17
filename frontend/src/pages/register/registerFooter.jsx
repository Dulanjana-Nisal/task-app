import { Link } from "react-router-dom";

function RegisterFooter() {
    return (
        <div class="form-footer">
            <p>Already have an account <Link to="/login">Sign in</Link></p>
        </div>
    )
}

export default RegisterFooter;