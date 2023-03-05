import {cloneElement, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import {replaceMarkdown} from "../../scripts/StringUtility";

import ReactSpoiler from "react-spoiler";
import {CodeBlock, CopyBlock, dracula} from "react-code-blocks";

export default function MinecraftTutorial() {
    require("../../styles/minecraft-tutorial.css");

    const navigate = useNavigate();

    const {version, tutorial} = useParams();
    const [content, setContent] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/DaRealTurtyWurty/Minecraft-Tutorials/main/${version}/${tutorial}.json`)
            .then(res => res.json())
            .then(deserialize)
            .then(setContent)
            .catch(err => {
                console.error(err);
                setError(true);
            });

    }, [version, tutorial, navigate]);

    if (error) {
        navigate("../../../../404");
        return;
    }

    if (!content) {
        return <h1>Loading...</h1>;
    }

    const dateOptions = {
        weekday: "long",
        month: "long",
        year: "numeric",
        day: "numeric"
    }

    return (<div className="minecraft-tutorial">
        <main>
            <header>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
                <p>Created at: {content.createdAt.toLocaleDateString("en-GB", dateOptions)}</p>
                <div className="tag-container">
                    <p>Tags:</p>
                    <ul className="tags">
                        {content.tags.map(tag => tag.toString()).map(tag => <li key={tag}>{tag}</li>)}
                    </ul>
                </div>
                <div className="author-container">
                    <p>Author:</p>
                    <img className="author-profile" src={`https://crafatar.com/avatars/${content.author.uuid}?size=32&overlay=true`} alt="" />
                    <p>{content.author.name}</p>
                </div>
            </header>
            <p className="version-label">{version}</p>
            <div className="content">
                {content.content}
            </div>
        </main>
    </div>);
}

function deserialize(json) {
    return {
        title: json.title,
        description: json.description,
        createdAt: new Date(json.createdAt),
        tags: json.tags.map(tag => tag.toString()),
        author: json.author,
        content: json.content.map(deserializeItem)
    };
}

function deserializeItem(item) {
    if (!item.type) {
        return replaceMarkdown(item);
    }

    let style = item.style || {};
    switch (item.type) {
        case "paragraph":
            return <p style={style}>{replaceMarkdown(item.content)}</p>;
        case "code":
            let language = item.language || "text";
            if (item.language) {
                language = item.language.toLowerCase().trim();
            }

            if(item["is-copy"]) {
                return <CopyBlock
                    text={item.content}
                    language={language}
                    showLineNumbers={item["show-line-numbers"] || true}
                    theme={dracula}
                    wrapLines
                />;
            } else {
                return <CodeBlock
                    text={item.content}
                    language={language}
                    showLineNumbers={item["show-line-numbers"] || true}
                    theme={dracula}
                    wrapLines
                />;
            }
        case "image":
            return <img src={item.content} alt={item.alt || ""} title={item.alt || ""} style={style}/>;
        case "heading2":
            return <h2 style={style}>{replaceMarkdown(item.content)}</h2>;
        case "heading3":
            return <h3 style={style}>{replaceMarkdown(item.content)}</h3>;
        case "heading4":
            return <h4 style={style}>{replaceMarkdown(item.content)}</h4>;
        case "heading5":
            return <h5 style={style}>{replaceMarkdown(item.content)}</h5>;
        case "heading6":
            return <h6 style={style}>{replaceMarkdown(item.content)}</h6>;
        case "line-break":
            return <br style={style}/>;
        case "list":
            let list = item.content.map(i => {
                let element = deserializeItem(i);
                let listItem = <li key={element.id}>{deserializeItem(element)}</li>;

                let props = { ...listItem.props };
                if (i.style)
                    props.style = i.style;

                if(i["list-style"]) {
                    props.className += ` list-style-${i["list-style"]}`;
                }

                Object.preventExtensions(props);
                listItem = cloneElement(listItem, props);

                return listItem;
            });
            return item.ordered ? <ol style={style}>{list}</ol> : <ul style={style}>{list}</ul>;
        case "quote":
            return <blockquote style={style}>{deserializeItem(item.content)}</blockquote>;
        case "link":
            return <a href={item.content} style={style}>{item.alt || item.content}</a>;
        case "table":
            return <table style={style}>
                <tbody>
                {item.content.map(deserializeItem)}
                </tbody>
            </table>;
        case "table-row":
            return <tr key={item.id} style={style}>{item.content.map(deserializeItem)}</tr>;
        case "table-cell":
            return <td key={item.id} style={style}>{deserializeItem(item.content)}</td>;
        case "warning":
            return <div className="warning" style={style}>{deserializeItem(item.content)}</div>;
        case "information":
            return <div className="information" style={style}>{deserializeItem(item.content)}</div>;
        case "success":
            return <div className="success" style={style}>{deserializeItem(item.content)}</div>;
        case "error":
            return <div className="error" style={style}>{deserializeItem(item.content)}</div>;
        case "spoiler":
            return <ReactSpoiler style={style} blur={10} hoverBlur={5} className="spoiler">{deserializeItem(item.content)}</ReactSpoiler>;
        case "embed":
            return <iframe
                src={item.content.startsWith ? item.content : `https://www.youtube.com/embed/${item.content}`}
                title={item.content} style={style}/>;
        case "math":
            return <div className="math" style={style}>{item.content}</div>
        case "video":
            return <video src={item.content} controls style={style}/>;
        case "audio":
            return <audio src={item.content} controls style={style}/>;
        case "download":
            return <a href={item.content} download style={style}>{item.alt || item.content}</a>;
        case "line-separator":
            return <hr style={style}/>;
        case "blink":
            return <div className="blink" style={style}>{deserializeItem(item.content)}</div>;
        case "string":
            return replaceMarkdown(item.content);
        default:
            return <p style={style}>{replaceMarkdown(item.content)}</p>;
    }
}