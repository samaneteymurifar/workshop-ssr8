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
                test:[/\.gif$/,/\.svg$/,],
                loader:'url-loader',
            },

            {
                loader:require.resolve('file-loader'),
                exclude: [/\.(js|mjs|jsx|ts|tsx|svg|gif)$/, /\.html$/, /\.json$/],
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                  },
            }
        ] 
    }
}