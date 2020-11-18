/* craco.config.js */
const CracoLessPlugin = require('craco-less');
const path = require('path');
const webpack = require('webpack');
// 产看打包进度
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' );
// .gz 压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');


const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@common': pathResolve('src/common'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@pages': pathResolve('src/pages'),
      '@store': pathResolve('src/store'),
      '@utils': pathResolve('src/utils')
      // 此处是一个示例，实际可根据各自需求配置
    },
    plugins:[
       // 打压缩包
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp(
            '\\.(' +
            ['js', 'css'].join('|') +
            ')$'
        ),
        threshold: 1024,
        minRatio: 0.8
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new SimpleProgressWebpackPlugin(),
    ],
  },
  plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { '@primary-color': '#1DA57A' },
              javascriptEnabled: true,
            },
          },
        },
      },
  ],
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', style: true }],
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ]
    ]
  }
};