const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template'));

describe('fox-webpack-builder test case', () => {
    require('./unit/webpack.base');
})