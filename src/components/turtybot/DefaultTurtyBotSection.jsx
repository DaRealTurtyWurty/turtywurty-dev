import NSFWImage from "../NSFWImage";

export default function DefaultTurtyBotSection(props) {
    require("../../styles/turtybot-section.css");

    const {title, description, image, isLeft, isNSFW} = props;

    return (
        <section className="turtybot-section">
            <div className={isLeft === true ? "section-content left-aligned" : "section-content"}>
                <div className="section-text">
                    <h1 className="section-title">{title}</h1>
                    <p className="section-description">{description}</p>
                </div>
                {
                    isNSFW === true ?
                        <NSFWImage url={image} classes={["section-image"]}/> :
                        <img className="section-image" src={image}/>
                }
            </div>
        </section>
    );
}