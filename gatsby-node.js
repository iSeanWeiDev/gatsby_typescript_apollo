const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions;

  return new Promise((resolve) => {
    // if the page component is the index page component
    if (
      path.resolve(page.componentPath) ===
      path.resolve(__dirname, 'src/pages/index/index.tsx')
    ) {
      deletePage(page);

      // create a new page but with '/' as path
      createPage({
        ...page,
        path: '/',
      });
    }

    resolve();
  });
};
