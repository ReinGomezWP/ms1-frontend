import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { EEnv, getBaseConfig } from './webpack.base.config';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const baseConfig = getBaseConfig(EEnv.DEV);

export const storybookWebpackConfig: Configuration = {
  ...baseConfig,
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader',
          '@mdx-js/loader'
        ]
      }
    ],
  },
}