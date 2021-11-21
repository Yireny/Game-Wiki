const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}


module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
      config.resolve.alias
        .set('@', resolve('src'))
        .set('@',resolve('src/api'))
        .set('@assets',resolve('src/assets'))
        .set('@components',resolve('src/components'))
        .set('@pages',resolve('src/pages'))
        .set('@router',resolve('src/router'))
        .set('@store',resolve('src/store'))
        .set('@utils',resolve('src/utils'))
    },
}