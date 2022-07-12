import { Configuration as WebpackCoreConfig } from "webpack"

type Config = WebpackCoreConfig

const config: Config = {
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|svg|webp|gif|ts|tsx|js|jsx|css|scss)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
}

export default config
