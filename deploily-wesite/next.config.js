/** @type {import('next').NextConfig}*/
const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  output: "standalone",
  reactStrictMode: true,
  env: {
  },
 
  swcMinify: true
});
