const webpack = require("webpack");
const path = require("path");
let config = {
    entry: "./index-build.js",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: [{
                        loader: 'style-loader',
                        options: {
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                        }
                    },
                    {
                        loader: 'resolve-url-loader', // rewrite correctly the url() found by sass
                        options: {
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, '../')],
                            sourceMapContents: false
                        }
                    }
                ],
                include: path.resolve(__dirname, '../'),
            }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [{
                loader: "babel-loader",
                options: require('./.storybook/.babelrc.js')
            }],
            include: path.resolve(__dirname, '../'),
        }, {
            test: /\.css$/,
            loaders: [{
                    loader: 'style-loader',
                    options: {
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                    }
                },
                {
                    loader: 'raw-loader',
                    options: {
                    }
                },
    
            ]
        }, {
            test: /\.(woff2?)$/,
            use: [{
                loader: 'file-loader',
                options: {},
            }, ],
        },{
            test: /\.(svg?)$/,
            use: [{
                loader: 'file-loader',
                options: {},
            }, ],
        },{
            test: /\.(jpg?)$/,
            use: [{
                loader: 'file-loader',
                options: {},
            }, ],
        }
    ]
      }
  }
  
  module.exports = config;