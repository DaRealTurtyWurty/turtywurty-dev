import turtybot from "../../assets/turtybot.png";

export default function AboutSection() {
    require("../../styles/turtybot.css");

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