var webpack = require('webpack');
var path = require('path');

var PROD = false;

process.argv.forEach(function (val, index, array) {
    //console.log(index + ': ' + val);
    if (val == "--build-production")
    {
        PROD = true;
        console.log("BUILDING PRODUCTION");
    }
});

//var PROD = JSON.parse(process.env.PROD_ENV || '0');

var bourbon = require('node-bourbon').includePaths;

module.exports = {
    
    devtool: ((!PROD)?'source-map':''),
    watch: !PROD,
    entry: {
        //test: "./app/js/test.js"
        median: "./app/js/appEntry.js"
    },
    output: {
        //path: __dirname + "/app/js/build",
        //filename: "[name].build.js"
        filename: ((PROD)? (__dirname +"/app/"):"") + "median.build.js"
    },
    module: {
        loaders: [
            
            //JSX
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },

            // SASS
            {
                test: /\.scss$/,
                loader: 'style!css!sass?source-map&includePaths[]=' + bourbon //adds source map
            }

        ]
    },
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" },
      contentBase: "./app"
    },

    plugins: (
        PROD ? [
            new webpack.optimize.UglifyJsPlugin({minimize: true})
        ] : []
    ),
  

    //determines the acceptable "require" paths. makre sure names are unique
    resolve: {
        root: [
            path.resolve('./node_modules'),
            path.resolve('./app'),
            path.resolve('./app/js'),
            path.resolve('./app/css/sass'),
            path.resolve('./app/js/react_components'),
            path.resolve('./app/img')
        ],
        extensions: ['','.js','.jsx','.css','.scss','.jpg','.png']
    }
}


