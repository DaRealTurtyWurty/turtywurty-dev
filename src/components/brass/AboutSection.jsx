import "../../styles/brass-about.css";

import brass from "../../assets/brass.png";

export default function AboutSection() {
    return (
        <section className="brass-section">
            <h1 className="brass-title">Brass</h1>
            <img src={brass} className="brass-logo" alt="Brass Logo"/>
            <p className="brass-description">
                Brass is a Minecraft Modding toolchain built for aspiring programmers to work with a garden-fresh API.
            </p>
        </section>
    );
}