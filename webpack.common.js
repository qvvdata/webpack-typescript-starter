const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        Index: path.resolve(__dirname, `src/Index.ts`)
    },
    output: {
        filename: `[name].js`,
        library: `[name]`,
        path: path.resolve(__dirname, 'dist'),
        libraryExport: 'default',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            // All files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        // Only transpile, typechecking will be done in a separate thread
                        // so we can develop without roadblocks.
                        transpileOnly: true
                    }
                }]
            },

            // Regular css loader.
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader', // Creates `style` nodes from JS strings
            //         'css-loader' // Translates CSS into CommonJS
            //     ]
            // },

            // SCSS loader.
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'style-loader', // Creates `style` nodes from JS strings
            //         'css-loader', // Translates CSS into CommonJS
            //         'sass-loader' // Compiles Sass to CSS
            //     ]
            // },

            // {
            //     test: /\.(csv|tsv)$/,
            //     use: {
            //         loader: 'csv-loader',
            //         options: {
            //             header: true,
            //             dynamicTyping: true,
            //             skipEmptyLines: true
            //         }
            //     }
            // },

            // Checks for any images and if they are smaller
            // than 100kb they will encoded as base64.
            // {
            //     test: /\.(png|jp(e*)g|svg)$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 100000, // Limit 100kb
            //             name: 'images/[hash]-[name].[ext]',
            //             publicPath: '',
            //         }
            //     }]
            // },

            // Loaders for shaders.
            // {
            //     test: /\.(glsl|vs|fs|vert|frag)$/,
            //     exclude: /node_modules/,
            //     use: ['raw-loader', 'glslify-loader']
            // },

            // Loader for fonts to bake in fonts into the build.
            // {
            //     test: /\.(woff2?|eot|ttf|otf)$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 100000, // Limit 100kb
            //         name: 'fonts/[hash]-[name].[ext]',
            //         publicPath: '',
            //     }
            // }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        // Copy the index html so we can test the dist folder.
        new CopyWebpackPlugin([{ from: './src/html/index.html', to: 'index.html' }]),
    ]
};
