const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./public/index.html",
 filename: "./index.html"
});
module.exports = {
mode: 'development',
module: {
  rules: [{
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  }
 },
  {
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i, 
    loader: 'url-loader',
    options: {
      name: '/public/icons/[name].[ext]'
    }
}
]},
 plugins: [htmlPlugin],
 devServer: {
    host: 'localhost',
    allowedHosts: ['localhost']
},
entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: 'auto'
  }
};
