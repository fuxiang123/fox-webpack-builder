const assert = require("assert");
const path = require('path');

describe('builder-webpack test case', () => {
    const baseConfig = require('../../lib/webpack.base');
    console.log(baseConfig);
    it('entry', () => {
        assert.equal(baseConfig.entry.index, 'D:/code/practice/frontEnd/webpack-study/builder-webpack/test/smoke/template/src/index/index.js')
        assert.equal(baseConfig.entry.search, 'D:/code/practice/frontEnd/webpack-study/builder-webpack/test/smoke/template/src/search/index.js')
    });
})