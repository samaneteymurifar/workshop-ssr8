const merge=require('webpack-merge')
const path=require('path')

const commonConfig=require('./webpack.commons')
const serverConfigs={

    // یعنی این در سمت سرور برای نود اجرا میشه
    target:"node",

    // فایل ورودی که می خواهیم به  اکمااسکریپت5 تبدیل بشه
    entry:'./src/index.js',
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'../build')
    },
}
module.exports=merge(serverConfigs,commonConfig)
