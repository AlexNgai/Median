var webpack = require('webpack');

module.exports = {
    entry: {
        //test: "./app/js/test.js"
        median: "./app/js/appEntry.js"
    },
    output: {
        path: __dirname + "/app/js/build",
        filename: "[name].build.js"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" },
      contentBase: "app"
    }
  
}

