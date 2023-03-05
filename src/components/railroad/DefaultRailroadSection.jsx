export default function DefaultRailroadSection(props) {
    require("../../styles/railroad-section.css");

    const {title, image, description} = props;
    return (
        <section className="railroad-section">
            <h1 className="section-title">{title}</h1>
            <img className="section-image" src={image}/>
            <h3 className="section-description">{description}</h3>
        </section>
    );
}