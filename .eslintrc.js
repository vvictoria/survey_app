module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        'plugin:vue/strongly-recommended',
    ],
    plugins: [
        'vue'
    ],
    rules: {
        'generator-star-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "any",
                "normal": "any",
                "component": "always"
            },
            "svg": "any",
            "math": "any"
        }],
        "vue/max-attributes-per-line": [2, {
            "singleline": 4,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }],
        "vue/attribute-hyphenation": [2, "never"]
    }
};
