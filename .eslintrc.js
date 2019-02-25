module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: false
        }
    },
    extends: [
        'standard',
        'plugin:vue/recommended',
        'prettier',
        'prettier/standard',
        'prettier/vue'
    ],
    plugins: ['standard', 'vue', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                htmlWhitespaceSensitivity: 'ignore',
                semi: true,
                singleQuote: false
            }
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'any'
                }
            }
        ],
        'vue/no-use-v-if-with-v-for': ['off'],
        'vue/component-name-in-template-casing': ['off'],
        'vue/no-unused-components': ['off'],
        eqeqeq: ['off'],
        'no-new': ['off']
    }
}