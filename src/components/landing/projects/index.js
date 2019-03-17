import React from 'react'
import { Link, StaticQuery, graphql } from "gatsby"

import Caption from '../caption/index'
import Section from '../../section/white/index'
import Button from '../../button/index'

import './style.css'

const Projects = () => (
    <StaticQuery 
        query={graphql`
            {
                allContentfulWorks {
                    edges {
                      node {
                        id
                        header
                        category
                        image {
                          id
                          file {
                            url
                          }
                        }
                      }
                    }
                  }
            }
        `}
        render={({
            allContentfulWorks: {
                edges
            }
        }) => (
            <div className="works">
                {edges.map(({ node }, index) => (
                    (index === 7 ) ?  '' : 
                    <Work content={node} key={node.id} />
                ))}
            </div>
        )}
    />
)

const Work = ({
    content: {
        id,
        header,
        category,
        image: {
            file: {
                url
            }
        }
    }
}) => (
    <Link to={"/"} className="works__item" style={{ backgroundImage: "url( " + (url) + " )" }}>
        <div className="works__content">
            <span className="works__category">
                {category}
            </span>
            <h3 className="works__title">{header}</h3>
        </div>
    </Link>
)

const Project = () => (
    <Section className="project">
        <Caption 
            title="Последние работы" 
            description="Картины на продажу" />
        <Projects  />
        <Button 
            title="Смотреть" 
            url="/" 
            className="btn btn-black works__button" />
    </Section>
)

export default Project