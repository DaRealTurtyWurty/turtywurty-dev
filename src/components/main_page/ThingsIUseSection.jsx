import downArrow from "../../assets/down-arrow.svg";
import LanguagesSection from "./LanguagesSection";
import FrameworksSection from "./FrameworksSection";
import SoftwareSection from "./SoftwareSection";

export default function ThingsIUseSection() {
    require("../../styles/things-i-use.css");

    function handleClick() {
        const thingsIUse = document.querySelector(".things-i-use-container");
        const downArrow = document.querySelectorAll(".down-arrow");
        if (thingsIUse.classList.contains("hidden")) {
            thingsIUse.classList.remove("hidden");
            setTimeout(() => {
                thingsIUse.classList.remove("dont-display");
            }, 0);
            downArrow.forEach(arrow => arrow.classList.add("open"));
        } else {
            thingsIUse.classList.add("hidden");
            setTimeout(() => thingsIUse.classList.add("dont-display"), 500);
            downArrow.forEach(arrow => arrow.classList.remove("open"));
        }
    }

    return (
        <div>
            <section className="things-i-use" onClick={handleClick}>
                <img src={downArrow} className="down-arrow"></img>
                <h1>What I Use</h1>
                <img src={downArrow} className="down-arrow"></img>
            </section>
            <div className="things-i-use-container hidden dont-display">
                <LanguagesSection/>
                <FrameworksSection/>
                <SoftwareSection/>
            </div>
        </div>
    );
}