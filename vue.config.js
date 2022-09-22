 var link = "https://chattelapi.kodeafrika.com/api";

module.exports = {
    devServer: {
        port: 4000,
        proxy: {
            "^/api": {
                target: link,
                pathRewrite: { "^/api/": "/api/" },
                changeOrigin: true,
                ws: true,
                logLevel: "debug",
                secure: false,
            },
        }
    }
}


// module.exports = {
//     devServer: {
//         port: 4000,
//         proxy: link
//     }
// }