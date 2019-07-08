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
            },
            {
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
    }, {
        test: /\.js$/,
        //exclude: /node_modules\/(?!@.+)/, // \/(?!(MY-MODULE|ANOTHER-ONE)\/).*
        //exclude: /node_modules\/(?![lit\-element|lit\-html])/,
        exclude: /node_modules/,
        loaders: [{
            loader: "babel-loader",
            options: require('./.babelrc.js')
        }],
        include: path.resolve(__dirname, '../'),
    }, {
        test: /\.css$/,
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
            },
            {
                loader: 'raw-loader',
                options: {
                    sourceMap: true
                }
            },

        ]
    }, {
        test: /\.(woff2?)$/,
        use: [{
            loader: 'file-loader',
            options: {},
        }, ],
    })

    // Return the altered config
    return config
}