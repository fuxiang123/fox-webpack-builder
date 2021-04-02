const path = require("path");
const webpack = require("webpack");
// 对rm -rf命令进行封装的库
const rimraf = require("rimraf");
const Mocha = require('mocha');

const mocha = new Mocha({
    timeout: 10000
})

// 进入子目录template
process.chdir(path.join(__dirname, 'template'));

rimraf('./dist', ()=>{
    const prodConfig = require('../../lib/webpack.prod.js');

    webpack(prodConfig, (err, state) => {
        if(err) {
            console.error(err);
            process.exit(2);
        }
        console.log(state.toString({
            colors: true,
            modules: false,
            children: false
        }));

        console.log('Webpack build sucess, begin run test');

        mocha.addFile(path.join(__dirname, 'html-test.js'))
        mocha.addFile(path.join(__dirname, 'css-js-test.js'))

        mocha.run(); 
    })
})