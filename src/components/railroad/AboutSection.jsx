import logo from "../../assets/railroad-ide.png";
import image from "../../assets/railroad-image.png";

export default function AboutSection() {
    require("../../styles/railroad-about.css");

    return (
        <section className="railroad-section">
            <div className="railroad-header">
                <h1 className="railroad-title">Railroad IDE</h1>
                <img className="railroad-logo" src={logo}/>
                <p className="railroad-description">A Minecraft Modding IDE made by modders!</p>
                <div className="button-container">
                    <button className="railroad-button">Get Started</button>
                    <button className="railroad-button">Official Website</button>
                </div>
                <img className="railroad-image" src={image}/>
            </div>
        </section>
    );
}