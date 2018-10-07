module.exports = {
  chainWebpack: config => {
    config.module
      .rule("webComponent")
      .test(/\.wc.html$/)
      .use("raw-loader")
      .loader("raw-loader");
  }
};
