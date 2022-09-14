import "../../styles/turtys-chemistry-about.css";

import turtysChemistry from "../../assets/turtys-chemistry.png";

export default function AboutSection() {
    return (
        <section className="turtys-chemistry-section">
            <h1 className="turtys-chemistry-title">Turty's Chemistry</h1>
            <img src={turtysChemistry} className="turtys-chemistry-logo" alt="Turtys Chemistry"/>
            <p className="turtys-chemistry-description">
                Turty's Chemistry is a Minecraft Mod that adds Chemistry to Minecraft.
            </p>
        </section>
    );
}