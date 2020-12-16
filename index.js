module.exports = {
  extends: [
    "stylelint-config-standard", // or whatever you chose as your base config
    "stylelint-prettier/recommended"
  ],
  plugins: ["stylelint-high-performance-animation"],
  ignoreFiles: ["./next/**", "./dist/**"],
  rules: {
    "no-descending-specificity": null,
    "plugin/no-low-performance-animation-properties": true,
    // make Prettier return errors
    "prettier/prettier": [
      true,
      {
        // Optional Prettier config changes
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        singleQuote: false,
        trailingComma: "none",
        jsxBracketSameLine: false,
        semi: false
      }
    ]
  }
}