const path = require('path');

module.exports = {
    mode: 'production', // modo no qual sera compactado o codigo
    entry: './src/main.js', // entrada do arquivo que queremos 'desatualizar'
    output: {
       path: path.resolve(__dirname, 'public', 'assets', 'js'), // o caminho da pasta para colocar o bundle (usamos o path.resolve para que o codigo rode em qualquer dispositivo, pois as barras se alteram em diferentes SO)
       filename: 'bundle.js' // nome do arquivo onde todas os codigos trasncritos serão armazenados
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map' // mapea o codigo, para ficailitar a debugação do codigo
};