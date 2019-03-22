const path = require("path")

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators
    return new Promise((resolve, reject) => {
        const workPostTemplate = path.resolve("src/templates/work-post.js")
        resolve(
            graphql(`
                {
                    allContentfulWorks (limit: 100) {
                        edges {
                            node {
                                id
                                slug
                            }
                        }
                    }
                }
            `).then((result) => {
                if (result.errors) {
                    reject(result.errors)
                }
                result.data.allContentfulWorks.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.slug,
                        component: workPostTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                return
            })
        )
    })
}