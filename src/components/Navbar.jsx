import React from 'react';
import {Link} from "react-router-dom";

import icon from '../assets/icon.png';
import "../styles/navbar.css";

import {getSession, getUserProfile} from "../scripts/Supabase";

export default function Navbar() {
    const [userId, setUserId] = React.useState(null);
    const [userProfile, setUserProfile] = React.useState("https://avatars.githubusercontent.com/u/68478692");

    function handleHamburger() {
        let popout = document.querySelector(".navbar-popout");
        if (popout.classList.contains("open")) {
            popout.classList.remove("open");
        } else {
            popout.classList.add("open");
        }
    }

    getSession().then(session => {
        if (!session.data.session) return;

        let user = session.data.session.user;
        if (!user) return;

        console.log(user);

        setUserId(user.id);

        getUserProfile(user.id).then((data, error) => {
            console.log(data);
            console.log(error);

            if(data) {
                setUserProfile(data?.avatar_url);
            }
        });
    });

    return <nav className="navbar">
        <div className="navbar-brand">
            <img src={icon} alt="icon" className="navbar-icon"/>
            <h1 className="navbar-title">turtywurty.dev</h1>
        </div>

        <div className="navbar-right">
            <ul className="navbar-links">
                <li className="current"><Link to="/" activeStyle>Home</Link></li>
                <li><Link to="/about" activeStyle={{textDecoration: "underline"}}>About</Link></li>
                <li><Link to="/contact" activeStyle>Contact</Link></li>
            </ul>

            <img src="https://avatars.githubusercontent.com/u/68478692" alt="user" className="navbar-user"/>

            <div className="navbar-hamburger" onClick={handleHamburger}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>

            <div className="navbar-popout">
                <ul>
                    <li className="current">Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </nav>;
}