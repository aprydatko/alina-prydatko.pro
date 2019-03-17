import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import './style.css'

import Section from '../../section/white/index'
import Social from '../../social/index'
import Advantages from "../advantages/index"

const AboutMe = ({ title, content, img }) => (
    <div className="about-me">
        <h2 className="about-me__title">
            {title}
        </h2>
        <Social className="about-me__social" />
        <p className="about-me__content">
            {content}
        </p>
        <div className="about-me__photo" style={{ backgroundImage: `url(${img})` }}></div>
    </div>
)

const AuthorComponent = () => (
    <StaticQuery 
        query={graphql`
        {
            allContentfulAuthor {
              edges {
                node {
                  name
                  text {
                    text
                  }
                  avatar {
                    title
                    description
                    file {
                      url
                      fileName
                    }
                  }
                  photo {
                    title
                    description
                    file {
                      url
                      fileName
                    }
                  }
                }
              }
            }
          }
        `}
        render={({
            allContentfulAuthor: {
                edges
            }
        }) => (
            edges.map(({ node }, index) => (
                <Author content={node} key={index} />
            ))
        )}
    />
)

const Author = ({ 
    index,
    content: {
        name,
        text: {
            text
        },
        photo: {
            title,
            file: {
                url
            }
        }
    }
 }) => (
    <Section className="author container" key={index}>
        <AboutMe 
            title={name}
            content={text}
            img={url} alt={title}/>
        <Advantages />
    </Section>
)

export default AuthorComponent
