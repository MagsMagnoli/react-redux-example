// use commonjs
const storeSuffix = process.env.NODE_ENV === "production" ? "prod" : "dev";
module.exports = require(`./configureStore.${storeSuffix}`);
