/*{ test: /\.css$/,
    use: 
    [ '/Users/jpv/Documents/DEV/digital_guidelines/node_modules/style-loader/index.js',
        { loader: '/Users/jpv/Documents/DEV/digital_guidelines/node_modules/css-loader/dist/cjs.js',
        options: { importLoaders: 1 } },
        { loader: '/Users/jpv/Documents/DEV/digital_guidelines/node_modules/postcss-loader/src/index.js',
        options: { ident: 'postcss', postcss: {}, plugins: [Function: plugins] } } ] },

*/

const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = async ({
    config,
    mode
}) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
        test: /\.scss$/,
        loaders: [{
                loader: 'style-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            }, {
                loader: 'resolve-url-loader', // rewrite correctly the url() found by sass
                options: {
                    //debug: true,
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    includePaths: [path.resolve(__dirname, '../')],
                    // resolve-url-loader needs sourceMap here to work correctly
                    sourceMap: true,
                    sourceMapContents: false
                }
            }
        ],
        include: path.resolve(__dirname, '../'),
    })

    // Return the altered config
    return config
}