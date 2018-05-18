const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map', //type of source map webpack should generate => best kind of source map for development
    entry: './src/index.js', // start there & inspect depedencies
    output: { // output file created
        path: path.resolve(__dirname, 'dist'), //Get current path & add dist to the path
        filename: 'bundle.js', // file name
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx' ] // tell webpack must be aware of certain extensions
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Test  criteria of a file => if js extension file
                loader: 'babel-loader', // Bebel loader (next Gen Js to current Js)
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }, // Apply from back to top (first css-loader THEN styleloader)
                    {
                        loader: 'postcss-loader', 
                        options: {
                            ident: 'postcss',
                            plugins: () => {
                                autoprefixer({
                                    "browsers": [
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]' // use query param to set the limit to 8000 byte & set the name & extension of the file
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
}