module.exports = {
    webpack: config => {
        config = {
            ...config,
            output: {
                ...config.output,
                library: 'reactApp',
                libraryTarget: 'umd',
                publicPath: 'http://localhost:20000/'
            }
        }
        return config
    },
    devServer: configFunction => {
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            config.headers = {
                'Access-Control-Allow-Origin': '*'
            };
            return config
        }
    }
}