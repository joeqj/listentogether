module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      'body': ['Inter', 'Helvetica', 'Arial', 'sans-serif']
    }
  }
}
