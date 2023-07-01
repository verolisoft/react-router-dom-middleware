module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      "parser": "babel-eslint",
      "extends": ["eslint:recommended", "airbnb"],
      "plugins": ["import", "react"],
      "env": {
        "es6": true,
        "jest": true
      },
      "rules": {
        "import/no-commonjs": "off",
        "semi": ["error", "never"],
        "comma-dangle": ["error", "always-multiline"],
        "import/newline-after-import": [
          "error",{ "count": 2 }
        ],
        "max-len": "off",
        "import/no-absolute-path": 0,
        "import/extensions": 0,
        "no-mixed-operators": 0,
        "import/no-unresolved": "off",
        "react/jsx-filename-extension": [
          "error",{ "extensions": [".js", ".jsx"] }
        ],
        "no-restricted-properties": [
          "error",{ "property": "lenght" }
        ],
        "import/no-extraneous-dependencies": [
          "error",{ "packageDir": "./" }
        ]
      },
      presets: ["@babel/preset-env"],
    },
  },
};