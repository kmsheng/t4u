module.exports = {
  content: [
    './node_modules/@t4u/ui/src/**/*.vue',
    './index.html',
    './src/**/*.{vue,js}'
  ],
  theme: {
    extend: {
      colors: {


        'dark-text-light': '#a2a3a9',
        'dark-text': '#dddddd',
        'dark-text-strong': '#ffffff',
        'dark-text-primary': '#769aff',

        'dark-bg': '#070b1f',
        'dark-card': '#181c2f',
        'dark-popup': '#2b2e3c',

        'light-text-primary': '#6575de',
        'light-bg': '#ffffff',
        'light-card': '#eeeeee',
        'light-popup': '#eeeeee'
      }
    }
  },
  plugins: []
}
