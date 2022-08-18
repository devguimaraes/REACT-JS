module.exports = {
  env: {
    es2021: true,
    node: true,
		browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
		'html'
  ],
  rules: {
		'react/react-in-jsx-scope': 'off',
		"react/prop-types" : "off",
		"no-console": "off",
		"arrow-body-style": 'off'
  },
};
