import React from "react"
import "./style.css"

import Button from "../button/index"

const trim = (str, maxlength) => {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) : str;
}

const PriceTable = ({ name, size, price, timework, category, id }) => (
    <div className="price-table__wrapper">
        <table className="price-table">
            <tbody>
                <tr className="price-table__tr">
                    <th className="price-table__caption">Характеристики картины "{name}"</th>
                </tr>
                <tr className="price-table__tr">
                    <td className="price-table__td">Название:</td>
                    <td className="price-table__td">{name}</td>
                </tr>
                <tr className="price-table__tr">
                    <td className="price-table__td">Категория:</td>
                    <td className="price-table__td">{category}</td>
                </tr>
                <tr className="price-table__tr">
                    <td className="price-table__td">Id Номер:</td>
                    <td className="price-table__td">0{trim(id, 5)}</td>
                </tr>
                <tr className="price-table__tr">
                    <td className="price-table__td">Размеры:</td>
                    <td className="price-table__td">{size}</td>
                </tr>
                <tr className="price-table__tr">
                    <td className="price-table__td">Время работы:</td>
                    <td className="price-table__td">{timework}</td>
                </tr>
                <tr className="price-table__tr">
                    <td className="price-table__td">Стоимость:</td>
                    <td className="price-table__td">{price} грн.</td>
                </tr>
            </tbody>
        </table>
        <Button 
            title="Заказать"
            style={{ margin: "0 auto", color: "black" }} />
    </div>
)

export default PriceTable