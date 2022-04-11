module.exports = {
  content: [
    './index.html',
    './src/*.{svelte,js,ts}',
    '.src/**/*.{svelte,js,ts}',
    './src/**/**/*.{svelte,js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
        'fredoka-one': ['Fredoka One', 'cursive'],
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
}
