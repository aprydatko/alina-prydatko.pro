import React from 'react'
import './style.css'
import { StaticQuery, graphql } from "gatsby"

const AuthorInfo = () => (
    <StaticQuery 
        query={graphql`
            {
                contentfulAuthor {
                    name
                    avatar {
                      file {
                        url
                      }
                    }
                }
            }
        `}
        render={({
            contentfulAuthor: {
                name,
                avatar
            }
        }) => (
            <>
                <li className="page-info__item">
                    <img 
                        className="page-info__avatar" 
                        src={avatar.file.url} 
                        alt={name} />
                </li>
                <li className="page-info__item">
                    <div className="page-info__author">
                    <span>Автор:</span>
                        <span className="page-info__text page-info__link">{name}</span>
                    </div>
                </li>
            </>
        )}
    />
)

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
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) : str;
}

const PostInfo = ({date, id}) => (
    <>
        <li className="page-info__item">
           <div className="page-info__date">
                 <span>Опубликовано:</span>
                 <span className="page-info__text">{DateFormat(date, 10)}</span>
           </div>
        </li>
        <li className="page-info__item">
            <div className="page-info__id">
               <span>id №:</span>
               <span className="page-info__text">0{trim(id, 5)}</span>
            </div>
        </li>
    </>
)

const PageInfo = ({ date, id }) => (
    <ul className="page-info">
        <AuthorInfo />
        <PostInfo date={date} id={id} />
    </ul>
)

export default PageInfo
