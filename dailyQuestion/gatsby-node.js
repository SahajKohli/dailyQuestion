/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
    const blogPostTemplate = require.resolve(`./src/templates/questionTemplate.js`)
    const result = await graphql(`
  {
  allFile {
    edges {
      node {
        relativePath
        name
      }
    }
  }
}
  `);
    // Handle errors
result.data.allFile.edges.forEach(({node}) => {
    actions.createPage({
        path: node.name,
        component: require.resolve('./src/templates/questionTemplate.js'),
        context: {relativePath: node.relativePath}
        })
    })
};