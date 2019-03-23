import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import InstagramEmbed from 'react-instagram-embed';
import './style.css'

const InstagramURL = () => (
      <StaticQuery 
          query={graphql`
              {
                  allContentfulInstagram {
                        edges {
                          node {
                            url1
                            url2
                            url3
                            url4
                          }
                        }
                  }
              }
          `}
          render={({
            allContentfulInstagram: {
                  edges: [
                        {
                              node
                        }
                  ]
              }
          }) => (
                  <div className="instagram__wrapper">
                        <div className="instagram__item">
                              <InstagramEmbed
                                    url={node.url1}
                                    hideCaption={true}
                                    containerTagName='div'
                                    protocol=''
                                    injectScript
                                    onLoading={() => {}}
                                    onSuccess={() => {}}
                                    onAfterRender={() => {}}
                                    onFailure={() => {}}
                              />
                        </div>
                        <div className="instagram__item">
                              <InstagramEmbed
                                    url={node.url2}
                                    hideCaption={true}
                                    containerTagName='div'
                                    protocol=''
                                    injectScript
                                    onLoading={() => {}}
                                    onSuccess={() => {}}
                                    onAfterRender={() => {}}
                                    onFailure={() => {}}
                              />
                        </div>
                        <div className="instagram__item">
                              <InstagramEmbed
                                    url={node.url3}
                                    hideCaption={true}
                                    containerTagName='div'
                                    protocol=''
                                    injectScript
                                    onLoading={() => {}}
                                    onSuccess={() => {}}
                                    onAfterRender={() => {}}
                                    onFailure={() => {}}
                              />
                        </div>
                        <div className="instagram__item">
                              <InstagramEmbed
                                    url={node.url4}
                                    hideCaption={true}
                                    containerTagName='div'
                                    protocol=''
                                    injectScript
                                    onLoading={() => {}}
                                    onSuccess={() => {}}
                                    onAfterRender={() => {}}
                                    onFailure={() => {}}
                              />
                        </div>
                  </div>
                  
          )}
      />
  )
  


const Instagram = ({ data }) => (
    <div className="instagram">
          <InstagramURL />
      </div>
)

export default Instagram