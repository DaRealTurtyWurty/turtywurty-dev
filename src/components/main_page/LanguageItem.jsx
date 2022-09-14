export default function FrameworkItem(props) {
    const { name, url, image, startDate, description } = props;

    function handleClick() {
        window.open(url, "_blank");
    }

    return (
        <div className="language-item" onClick={handleClick}>
            <h2 className="language-name">{name}</h2>
            <img className="language-icon" src={image} />
        </div>
    );
}