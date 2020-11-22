var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:{
        react:['react','react-dom']
    },
    output:{
        filename:'[name].dll.js',
        path:path.resolve(__dirname,'public/dll'),
        library:'[name]_dll_[hash]'
    },
    plugins:[
        new webpack.DllPlugin({
            context:__dirname,
            name:'[name]_dll_[hash]',
            path:path.resolve(__dirname,'public','dll','[name].manifest.json')
        }),
    ]
}