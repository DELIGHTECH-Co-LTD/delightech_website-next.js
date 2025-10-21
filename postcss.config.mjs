const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    "autoprefixer": {},
    "cssnano": {
      preset: ["default", {
        discardComments: { removeAll: true },
        normalizeWhitespace: false
      }]
    }
  }
};

export default config;
