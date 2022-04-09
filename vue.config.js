const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css:{
    loaderOptions:{
      sass:{
        additionalData: ` @import "@/assets/SCSS/styles.scss"; `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/shop/'
      : '/'
})
