import React from 'react'
import './style.css'
import CaptionH3 from '../page/caption-h3/index'
import Button from '../button/index'

const Form = () => (
    <form className="form">
        <div className="form__top">
            <input 
                className="form__input" 
                id="form__input-color" 
                type="text" name="name" 
                placeholder="Введите свое имя" />
            <input 
                className="form__input" 
                id="form__input-color"  
                type="email" name="email" 
                placeholder="Ваш емаил" />
            <input 
                className="form__input" 
                id="form__input-color"  
                type="text" name="subject" 
                placeholder="Тема запроса" />
        </div>
        <div className="form__bottom">
            <textarea 
                className="form__textarea" 
                rows="10" 
                cols="45" 
                placeholder="Ваше сообшение здесь" /> 
        </div>
        <Button
            type="submit" 
            title="Отправить"
            url="/"
            className="btn btn-black form__btn"/>
    </form>
)

const FormBlock = ({ title, description }) => (
    <div>
        <CaptionH3 
            title={title}
            description={description} />
        <Form />
    </div>
)

export default FormBlock