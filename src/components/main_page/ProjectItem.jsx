import {useNavigate} from 'react-router-dom';

import NSFWImage from "../NSFWImage";

export default function ProjectItem(props) {
    const {name, url, image, description, nsfw} = props;

    const navigate = useNavigate();

    function handleClick() {
        navigate(url);
    }

    return (
        <div className="project-item" onClick={handleClick}>
            <h2 className="project-name">{name}</h2>
            <h3 className="project-description">{description}</h3>
            {nsfw === true ? <NSFWImage url={image} alt={name} classes={["project-image"]} id="nsfw-img"/> :
                <img className="project-image" src={image}/>}
        </div>
    );
}