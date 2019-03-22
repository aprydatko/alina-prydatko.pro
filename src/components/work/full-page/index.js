import React from 'react'
import './style.css'

import Image from "./image/index"
import WorkInfo from "./info/index"
import PriceTable from "../../price-table/index"
import Form from "../../form/index"

const LayoutWork = ({ data, children }) => (
    <div className="full-work">
        <div className="full-work__wrapper">
            <h2 id={data.slug} className="full-work__title">{data.title}</h2>
            <WorkInfo 
                date={data.createdAt}
                id={data.id} />
        </div>
        <div className="container">
            <Image 
                url={data.image.file.url} 
                category={data.category} />
        </div>
        <div className="full-work__content">
            <PriceTable 
                name={data.title}
                category={data.category}
                id={data.id}
                size={data.size}
                price={data.price} />
            {children}
            <Form 
                title="Контактная форма"/>
        </div>
    </div> 
)

export default LayoutWork