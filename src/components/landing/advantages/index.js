import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import './style.css'

import { ReactComponent as Individuality } from '../../../images/icons/advantages/individuality.svg'
import { ReactComponent as Superhero } from '../../../images/icons/advantages/superhero.svg'
import { ReactComponent as Vendetta } from '../../../images/icons/advantages/strenght.svg'
 

const Advantages = () => (
    <StaticQuery 
        query={graphql`
        {
            allContentfulAdvantages {
                edges {
                  node {
                    name
                    content {
                      content
                    }
                  }
                }
              }
          }
        `}
        render={({
            allContentfulAdvantages: {
                edges
            }
        }) => (
            <div className="advantages">
                {edges.map(({ node }, index) => (
                    <div key={index} className="advantages__item">
                        {   index === 0 ? <Individuality className="advantages__img" /> :
                            index === 1 ? <Superhero className="advantages__img" /> :
                            <Vendetta className="advantages__img" />
                        }
                        <h4 className="advantages__title">{node.name}</h4>
                        <p className="advantages__content">{node.content.content}</p>
                    </div>
                ))}
            </div>
        )}
    />
)

export default Advantages