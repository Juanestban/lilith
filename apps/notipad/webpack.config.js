const path = require('path');
const getConfig = require('@nrwl/react/plugins/webpack');

module.exports = (preConfig, options) => {
  const config = getConfig(preConfig);
  const defaultOptions = {
    importLoaders: 1,
    modules: {
      localIdentName: '[name]__[local]--[hash:base64:5]',
    },
  };

  const { cssModulesLoaderOptions = defaultOptions } = options;
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
    include: path.resolve(__dirname, 'apps/notipad'),
  });
  const cssLoaderRule = config.module.rules.find(
    (rule) => rule?.test?.toString() === '/\\.css$/'
  );

  if (cssLoaderRule) {
    config.module.rules.push({
      ...cssLoaderRule,
      test: /\.module\.css$/,
      use: cssLoaderRule.use.map((item) => {
        if (item?.loader?.match(/[\/\\]css-loader/g)) {
          return {
            ...item,
            options: { ...item.options, ...cssModulesLoaderOptions },
          };
        }

        return item;
      }),
    });
    cssLoaderRule.exclude = /\.module\.css$/;
  }

  return config;
};
