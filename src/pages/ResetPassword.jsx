import logo from "../assets/icon.png";

import "../styles/reset-password.css";

export default function ResetPassword() {
    return (
        <>
            <main>
                <div className="reset-password-wrapper">
                    <div className="reset-password-header">
                        <img src={logo} alt="" className="reset-password-logo"/>
                        <h1 className="reset-password-title">turtywurty.dev</h1>
                    </div>
                    <p className="reset-password-description">Forgot your password? No problem, we'll send you reset
                        instructions.</p>
                    <form className="reset-password-form">
                        <div className="reset-password-form-group">
                            <label htmlFor="email" className="reset-password-label">Email</label>
                            <input type="email" id="email" className="reset-password-input"/>
                        </div>
                        <button type="submit" className="reset-password-button">Reset Password</button>
                    </form>

                    <span className="reset-password-footer"><a href="./login" className="reset-password-login">Back to log in</a></span>
                </div>
            </main>
        </>
    );
}