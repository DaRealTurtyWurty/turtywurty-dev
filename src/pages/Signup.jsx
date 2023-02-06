import { useState } from "react";
import { signUp } from "../scripts/Supabase";
import { useNavigate } from "react-router-dom";

import logo from "../assets/icon.png";

import googleLogo from "../assets/google.svg";
import discordLogo from "../assets/discord_blue.svg";
import githubLogo from "../assets/github.svg";

import "../styles/signup.css";
import {validateEmail, validatePassword, validatePasswordMatch} from "../scripts/StringValidation";

export default function Signup() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function trySignup(event) {
        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm-password").value;

        let passwordResult = validatePassword(password);
        if (passwordResult.isValid === false) {
            setError("Password " + passwordResult.message);
            return;
        }

        let passwordConfirmResult = validatePasswordMatch(password, confirmPassword);
        if (passwordConfirmResult.isValid === false) {
            setError("Passwords " + passwordConfirmResult.message);
            return;
        }

        let emailResult = validateEmail(email);
        if (emailResult.isValid === false) {
            setError("Email " + emailResult.message);
            return;
        }

        console.log("Signing up...");
        setLoading(true);

        signUp(email, password).then((data, error) => {
            if (error) {
                setError(error);
                setData(null);
            } else if(data) {
                setError(null);
                setData(data);
            }

            setLoading(false);
        });
    }

    if(loading) {
        return (
            <div className="signup">
                <div className="signup-container">
                    <img src={logo} alt="logo" className="signup-logo"/>
                    <h1 className="signup-title">Loading...</h1>
                </div>
            </div>
        );
    }

    if(data) {
        return <>
            <main>
                <div className="signup-wrapper">
                    <div className="signup-header">
                        <img src={logo} alt="" className="signup-logo"/>
                        <h1 className="signup-title">turtywurty.dev</h1>
                    </div>
                    <div className="signup-body">
                        <h2 className="signup-body-title">Welcome to turtywurty.dev!</h2>
                        <p className="signup-body-text">You have successfully signed up! You can now log in to your account.</p>
                        <button type="submit" className="login-button" onClick={() => navigate("../login")}>Log In</button>
                    </div>
                </div>
            </main>
        </>
    }

    return <>
        <main>
            <div className="signup-wrapper">
                <div className="signup-header">
                    <img src={logo} alt="" className="signup-logo"/>
                    <h1 className="signup-title">turtywurty.dev</h1>
                </div>
                <p className="signup-description">Sign up to start working with the more in-depth features of this site.</p>
                <div className="providers-group">
                    <button type="submit" className="signup-provider"><img src={googleLogo} alt="google" title="google"/></button>
                    <button type="submit" className="signup-provider"><img src={discordLogo} alt="discord" title="discord" height={24}/></button>
                    <button type="submit" className="signup-provider"><img src={githubLogo} alt="github" title="github" height={24}/></button>
                </div>
                <hr className="signup-separator"/>
                <form className="signup-form">
                    <div className="signup-form-group">
                        <label htmlFor="email" className="signup-label">Email</label>
                        <input type="email" id="email" className="signup-input"/>
                    </div>
                    <div className="signup-form-group">
                        <label htmlFor="password" className="signup-label">Password</label>
                        <input type="password" id="password" className="signup-input"/>
                    </div>
                    <div className="signup-form-group">
                        <label htmlFor="confirm-password" className="signup-label">Confirm Password</label>
                        <input type="password" id="confirm-password" className="signup-input"/>
                    </div>
                    <button type="submit" className="signup-button" onClick={trySignup}>Sign Up</button>
                </form>

                {
                    error && <p className="signup-error">{error}</p>
                }

                <p className="signup-existing-account">Already have an account? <a href="./login" className="signup-footer-link">Log in</a></p>
            </div>
        </main>
    </>
}