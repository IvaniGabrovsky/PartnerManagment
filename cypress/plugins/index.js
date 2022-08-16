// Read more on plugins here:
// https://on.cypress.io/plugins-guide

module.exports = (on, config) => {
  config.env.NODE_ENV = process.env.NODE_ENV
  return config
}
