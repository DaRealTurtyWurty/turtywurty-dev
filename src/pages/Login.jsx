import logo from "../assets/icon.png";

import googleLogo from "../assets/google.svg";
import discordLogo from "../assets/discord_blue.svg";
import githubLogo from "../assets/github.svg";

import "../styles/login.css";

import { useNavigate } from "react-router-dom";
import { login } from "../scripts/Supabase";
import { useState } from "react";
import {validateEmail, validatePassword} from "../scripts/StringValidation";

export default function Login() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function tryLogin(event) {
        event.preventDefault();

        let email = document.getElementById("email").value;
        let emailResult = validateEmail(email);
        if (emailResult.isValid === false) {
            setError("Email " + emailResult.message);
            return;
        }

        let password = document.getElementById("password").value;
        let passwordResult = validatePassword(password);
        if (passwordResult.isValid === false) {
            setError("Password " + passwordResult.message);
            return;
        }

        login(email, password).then((data, error) => {
            if (error) {
                console.log(error);
                setError(error.message);
                return;
            }

            if (data.error) {
                setError(data.error.message);
                return;
            }

            navigate("../");
        }).catch(error => {
            setError(error.message);
        })
    }

    return (
        <>
            <main>
                <div className="login-wrapper">
                    <div className="login-header">
                        <img src={logo} alt="" className="login-logo"/>
                        <h1 className="login-title">turtywurty.dev</h1>
                    </div>
                    <p className="login-description">Sign in to continue working with the more in-depth features of this site.</p>
                    <div className="providers-group">
                        <button type="submit" className="login-provider"><img src={googleLogo} alt="google" title="google" /></button>
                        <button type="submit" className="login-provider"><img src={discordLogo} alt="discord" title="discord" height={24} /></button>
                        <button type="submit" className="login-provider"><img src={githubLogo} alt="github" title="github" height={24} /></button>
                    </div>
                    <hr className="login-separator"/>
                    <form className="login-form">
                        <div className="login-form-group">
                            <label htmlFor="email" className="login-label">Email</label>
                            <input type="email" id="email" className="login-input"/>
                        </div>
                        <div className="login-form-group">
                            <label htmlFor="password" className="login-label">Password</label>
                            <input type="password" id="password" className="login-input"/>
                        </div>
                        <button type="submit" className="login-button" onClick={tryLogin}>Sign in</button>
                    </form>

                    {
                        error && <p className="login-error">{error.toString()}</p>
                    }

                    <div className="login-footer">
                        <span><a href="./reset-password" className="login-forgot-password">Forgot your password?</a></span>
                        <p className="login-no-account">Don't have an account? <a href="./signup" className="login-signup-link">Sign up</a></p>
                    </div>
                </div>
            </main>
        </>
    );
}