import React from 'react'
import './style.css'

import Image from "./image/index"
import WorkInfo from "./info/index"
import PriceTable from "../../price-table/index"
import Buttom from "../../button/index"

const LayoutWork = ({ data, children }) => (
    <div className="full-work">
        <div className="full-work__wrapper">
            <h2 id={data.slug} className="full-work__title">{data.title}</h2>
            <WorkInfo 
                date={data.createdAt}
                id={data.id} />
        </div>
        <Image 
                url={data.image.file.url} 
                category={data.category} />
        <div className="full-work__content">
            <PriceTable 
                name={data.title}
                category={data.category}
                id={data.id}
                size={data.size}
                timework={data.timework}
                price={data.price} />
            <h3 id={data.slug} className="full-work__title">Подробное описание картины {data.title}</h3>
            {children}
            <Buttom 
                title="Купить"
                style={{ margin: "60px auto", color: "black" }}/>
        </div>
    </div> 
)

export default LayoutWork