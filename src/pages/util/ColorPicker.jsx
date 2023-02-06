import {useEffect, useRef, useState} from "react";
import Picker from "../../scripts/Picker";

import "../../styles/color-picker.css";

export default function ColorPicker() {
    const {color, setColor} = useState(0x000000);

    const canvasRef = useRef(null);

    useEffect(() => {
        let picker = new Picker(canvasRef.current, 500, 440);
        setInterval(() => {
            picker.draw();
        }, 1);
    }, []);

    return (<main>
            <div className="color-picker-container">
                <canvas ref={canvasRef} id="color-picker"></canvas>
                <div className="color-picker-info">
                    <h3 className="color-picker-info-text">Selected Color</h3>
                    <div className="color-picker-info-color" style={{backgroundColor: color}}></div>
                </div>
            </div>
        </main>);
}