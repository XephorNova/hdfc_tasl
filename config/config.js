const config = {
  development: {
    mongoURI: process.env.MONGODB,
    port: 9000,
    secret: "developmentSecret",
  },
  production: {
    mongoURI: process.env.MONGODB,
    port: 9000,
    secret: "productionSecret",
  },
}[process.env.NODE_ENV];

module.exports = config;
