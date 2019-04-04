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
                date={data.createdAt} />
        </div>
        <Image 
                url={data.image.file.url} 
                category={data.category} />
        <div className="full-work__content">
            {children}
        </div>
    </div> 
)

export default LayoutWork