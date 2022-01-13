const withTM = require('next-transpile-modules')(['swiper', 'react-id-swiper']); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  experimental: { esmExternals: true },
  env: {
    image_cdn: 'https://cdn.ball-lickincats.com/'
  },
})
