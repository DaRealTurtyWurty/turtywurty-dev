import arrow from "../assets/down-arrow.svg";
import {useState} from "react";

export default function Carousel(props) {
    require("../styles/carousel.css");

    const {content} = props;

    const [currentIndex, setCurrentIndex] = useState(0);

    if (!Array.isArray(content) || content.length === 0) {
        return null;
    }

    function previous() {
        setCurrentIndex(prev => prev === 0 ? content.length - 1 : prev - 1);
    }

    function next() {
        setCurrentIndex(prev => prev === content.length - 1 ? 0 : prev + 1);
    }

    return (
        <div className="carousel">
            <img src={arrow} className="carousel-arrow left" alt="left arrow" onClick={previous}/>
            <div className="carousel-content">
                {content.map((item, index) => (
                    <div className={index === currentIndex ? "carousel-item active" : "carousel-item"}>
                        {index === currentIndex && item}
                    </div>
                ))}
            </div>
            <img src={arrow} className="carousel-arrow right" alt="right arrow" onClick={next}/>
        </div>
    );
}