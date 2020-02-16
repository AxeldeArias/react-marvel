module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "new-cap": [2, { capIsNewExceptions: ["List", "Map", "Set"] }],
    "react/no-multi-comp": 0,
    "import/default": 0,
    "import/no-duplicates": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 2,
    "comma-dangle": 0, // not sure why airbnb turned this on. gross!
    "no-console": 0,
    "no-alert": 0,
    "prettier/prettier": ["error", { singleQuote: true, trailingComma: "es5" }],
    "react/jsx-filename-extension": [0, { extensions: [".js", ".jsx"] }],
    "import/no-named-as-default": 0,
    "global-require": 0
  }
};
