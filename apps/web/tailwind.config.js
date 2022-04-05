const config = require('@t4u/ui/tailwind-config')

module.exports = {
  content: [
    './node_modules/@t4u/ui/src/**/*.vue',
    './index.html',
    './src/**/*.{vue,js}'
  ],
  theme: {
    extend: {
      colors: config.colors
    }
  },
  plugins: []
}
