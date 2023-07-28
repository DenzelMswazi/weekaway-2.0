module.exports = {
    plugins: {
        'taiwindcss/nesting': {},
        tailwindcss: {},
        'postcss-focus-visible': {
            replaceWith: '[data-focus-visible-added]',
        },
        autoprefixer: {},
    },
}