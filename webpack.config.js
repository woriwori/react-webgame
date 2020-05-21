const path = require('path');
// node에서 path를 쉽게 조작할 수 있는 기능을 제공함.

module.exports = {
  mode: 'development', // 배포용이면 production
  devtool: 'eval',
  resolve: {
    extensions: ['.jsx', '.js'],
    // 이걸 하면, entry의 app에 파일 이름만 넣으면 이름.jsx, 이름.js를 다 찾아서 합쳐준다.
  },
  entry: {
    // 입력 (최고 중요)
    app: ['./client'], // WordRelay는 client.jsx안에서 불러와주고 있음.
  },

  // entry에 module을 적용해서 output으로 뺀다.
  module: {
    rules: [
      {
        test: /\.jsx?/, // jsx 를
        loader: 'babel-loader', // babel loader로 돌리겟다
        options: {
          // 이 옵션을 사용해서
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },

  output: {
    // 출력 (최고 중요)
    path: path.join(__dirname, 'dist'), // __dirname이 현재 프로젝트 폴더.(dirname: C:/user/....)
    // join하면 __dirname과 인자로 준 path를 합쳐주는 것.
    filename: 'app.js',
  },
};
