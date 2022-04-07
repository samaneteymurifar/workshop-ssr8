module.exports={
    module:{
         rules:[

            {
                test:/\.js?$/,
                loader:'babel-loader',
                options:{
                    presets:[
                        'react',
                        'stage-0',
                        ['env',{targets:{browsers:['last 2 versions']}}]
                    ]
                }
            },



            {
                test:[/\.gif$/,],
                loader:'url-loader',
            }
        ] 
    }
}