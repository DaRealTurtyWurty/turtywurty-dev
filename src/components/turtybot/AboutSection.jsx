import turtybot from "../../assets/turtybot.png";

import "../../styles/turtybot.css";

export default function AboutSection() {
    return (
        <section className="about-section">
            <h1 className="about-title">TurtyBot</h1>
            <img className="about-profile-picture" src={turtybot}/>
            <p className="about-description">A multi-purpose discord bot with levelling, moderation and more!</p>
            <div className="button-holder">
                <button className="invite-button">Invite</button>
                <button className="dashboard-button">Dashboard</button>
            </div>
        </section>
    );
}