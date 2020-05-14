/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions
    const questionsTemplate = require.resolve(`./src/templates/questionTemplate.js`);
    const answerTemplate = require.resolve(`./src/templates/answerTemplate.js`);

    const questions = graphql(`
    {
      allFile(filter: {relativeDirectory: {eq: "questions"}}) {
        edges {
          node {
            name
            relativePath
            relativeDirectory
          }
        }
      }
    }
    `).then(result => {
        result.data.allFile.edges.forEach(({node}) => {
            actions.createPage({
                path: node.name,
                component: require.resolve('./src/templates/questionTemplate.js'),
                context: {relativePath: node.relativePath}
            });
        });
    });

    const answers = graphql(`
    {
      allFile(filter: {relativeDirectory: {eq: "answers"}}) {
        edges {
          node {
            name
            relativePath
            relativeDirectory
          }
        }
      }
    }
    `).then(result => {
        result.data.allFile.edges.forEach(({node}) => {
            actions.createPage({
                path: node.name,
                component: require.resolve('./src/templates/answerTemplate.js'),
                context: {relativePath: node.relativePath}
            });
        });
    });

    return Promise.all([questions,answers]);
}

