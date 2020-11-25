const CopyPlugin = require("copy-webpack-plugin");

module.exports = [
  {
    mode: 'development',
    entry: './src/main.ts',
    target: 'electron-main',
    module: {
      rules: [
        {
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      }]
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "img/*.png"
          },
        ]
      })
    ],
    output: {
      path: __dirname + '/dist',
      filename: 'main.js'
    }
  }
];