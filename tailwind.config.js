module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          1: '#011F4B',
          2: '#005B96',
          3: '#F1FAFE',
        },
        accent: {
          1: '#1BC5BD',
          2: '#F6CA65',
          3: '#FFC107',
          4: '#A259FF',
          5: '#F24E1E',
        },
        gray: {
          1: '#7E8299',
          2: '#CDCCCC',
          3: '#6497B1',
        },
      },
      fontSize: {
        '2xl': '2rem',
        xl: '1.5rem',
        lg: '1.125rem',
        base: '1rem',
        sm: '0.875rem',
        xs: '0.625rem',
      },
    },
  },
  plugins: [],
};
