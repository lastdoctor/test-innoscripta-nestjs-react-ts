const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@src': path.resolve(__dirname, 'src/'),
      '@store': path.resolve(__dirname, 'src/store')
    },
  };
  return config;
};