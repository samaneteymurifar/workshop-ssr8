const merge=require('webpack-merge')
const path=require('path');

const commonConfig=require('./webpack.commons')

const clientConfigs={
     // فایل ورودی که می خواهیم به  اکمااسکریپت5 تبدیل بشه
    entry:'./src/client/client.js',
   
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'../public')
    },
    
}
module.exports=merge(clientConfigs,commonConfig)