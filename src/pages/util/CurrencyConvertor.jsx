import "../../styles/currency-convertor.css";
import {useEffect} from "react";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

export default function CurrencyConvertor() {

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, []);

    return <div className="currency-convertor">
        <div className="inner-container">
            <h2 className="currency-convertor-title">Currency Convertor</h2>
            <CurrencyRow/>
            <span className="currency-convertor-arrow">⇵</span>
            <CurrencyRow/>
        </div>
    </div>;
}

export function CurrencyRow() {
    return (
        <div className="currency-row">
            <input type="number" />
            <select>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
            </select>
        </div>
    )
}