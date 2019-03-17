import React from 'react'
import { Link } from "gatsby"
import './style.css'

function DateFormat(time, maxlength) {
    const month = [ 
        "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря" ]
    const timeTrim =  (time.length > maxlength) ? 
                       time.slice(0, maxlength) : time;

    const arr = timeTrim.split("-").reverse()
    const numberMonth = arr[1] - 1;
    const formatDate = arr[0] + " " + month[numberMonth] + " " + arr[2];
 
    return formatDate;
}

const trim = (str, maxlength) => {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 3) + '...' : str;
}

const Work = ({ data }) => (
    <div className="work">
         {data.map(content => (
            <WorkItem content={content.node} key={content.node.id} />
         ))}
    </div>
)

const WorkItem = ({ 
    content: {
        header,
        content: {
            content
        },
        image: {
            file: {
                url
            }
        },
        createdAt
    }
 }) => (
    <Link to={`/`} className="work__item">
        <div className="work__item_img-wrap">
            <div    className="work__image" 
                    style={{ backgroundImage: `url(${url})` }}>
            </div>
        </div>
        <div className="work__item_content">
            <div className="work__date">{DateFormat(createdAt, 10)}</div>
            <h5 className="work__title">{trim(header, 30)}</h5>
            <p className="work__content">{trim(content, 120)}</p>
            <div className="work__author">
                Автор:   
                <span className="work__author-link">Придатко Алина</span>
            </div>
        </div>
    </Link>
)

export default Work