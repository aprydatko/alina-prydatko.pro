import React from 'react'
import './style.css'

import insta1  from '../../../images/instagram/insta-1.jpg'
import insta2  from '../../../images/instagram/insta-2.jpg'
import insta3  from '../../../images/instagram/insta-3.jpg'
import insta4  from '../../../images/instagram/insta-4.jpg'

const Instagram = () => (
    <div className="instagram">
         <div className="instagram__wrapper">
               <div className="instagram__item"  style={{ backgroundImage: "url( " + (insta1) + " )" }}></div>
               <div className="instagram__item"  style={{ backgroundImage: "url( " + (insta2) + " )" }}></div>
               <div className="instagram__item"  style={{ backgroundImage: "url( " + (insta3) + " )" }}></div>
               <div className="instagram__item"  style={{ backgroundImage: "url( " + (insta4) + " )" }}></div>
         </div>
      </div>
)

export default Instagram