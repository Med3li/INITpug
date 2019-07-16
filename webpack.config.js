var path = require('path');

module.exports = {
mode: "production",
entry: {
  app:['./js/main.js','./js/theme.js'],
  },
output: {
 filename: "bundle.js",
 path: path.resolve(__dirname, "dist/js")
 },
performance: {
  hints: process.env.NODE_ENV === 'production' ? "warning" : false
},
optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  },
devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 7200,
    watchContentBase: true
 },
target: "node",
node :{
    __dirname: false,
    fs:"empty"
},
watch: true
};
/*
//to bundle multiply file
entry: {
    //method:single named entry '[name]':
    one:path.resolve(__dirname,'src/util.js'),
    two:path.resolve(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].js',
    chunkFilename: "[id].chunk.js",
    path: path.resolve(__dirname, 'dist'),
  }
*/