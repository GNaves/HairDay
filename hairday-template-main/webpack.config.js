/*
Importando o módulo 'path' do Node.js, que ajuda a resolver caminhos de arquivos
de forma compatível com diferentes sistemas operacionais (Windows, Linux, etc.).
*/
const path = require("path");

// Importando o plugin HTMLWebpackPlugin, que facilita a criação de um arquivo HTML
// que inclui automaticamente os arquivos de JavaScript gerados pelo Webpack.
const HTMLWebpackPlugin = require("html-webpack-plugin");

// Importando o plugin CopyWebpackPlugin, que permite copiar arquivos ou diretórios
// para a pasta de saída do Webpack.
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /*
  Definindo o target como "web", o que significa que o Webpack irá gerar
  um bundle adequado para ser executado em um ambiente de navegador.
  */
  target: "web",

  /*
  Definindo o modo para "development", o que otimiza a experiência de desenvolvimento.
  O código não será minificado, será gerado um source map, e as builds serão mais rápidas.
  */
  mode: "development",

  /*
  Definindo o arquivo de entrada da aplicação, ou seja, o ponto de início.
  O Webpack começará a análise e a construção a partir deste arquivo.
  Usamos path.resolve para garantir que o caminho será resolvido corretamente,
  independentemente do sistema operacional.
  */
  entry: path.resolve(__dirname, "src", "main.js"),

  output: {
    /*
    Definindo o nome do arquivo gerado após o build. No caso, será "main.js".
    */
    filename: "main.js",

    /*
    Definindo o diretório onde o arquivo gerado será armazenado. Aqui, será na pasta "dist"
    na raiz do projeto. O path.resolve garante que o caminho seja resolvido de maneira
    correta, independentemente do sistema operacional.
    */
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    // Configuração para os arquivos estáticos que o servidor de desenvolvimento irá servir.
    // O Webpack Dev Server irá servir os arquivos a partir do diretório "dist", 
    // que é onde o Webpack coloca o arquivo de saída do build.
    static: {
      directory: path.join(__dirname, "dist"), // Caminho absoluto para o diretório "dist"
    },
  
    // Definindo a porta em que o servidor de desenvolvimento irá rodar. Neste caso, será a porta 3000.
    // Acesse a aplicação no navegador através de http://localhost:3000
    port: 3000,
  
    // Configuração para abrir automaticamente o navegador quando o servidor for iniciado.
    // O navegador será aberto automaticamente na URL configurada, no caso, http://localhost:3000.
    open: true,
  
    // Habilitando o Live Reload. Isso significa que o navegador será recarregado automaticamente
    // sempre que houver uma mudança no código-fonte ou no bundle gerado.
    liveReload: true,
  },

  /*
  Plugins permitem estender as funcionalidades do Webpack. Aqui estamos utilizando o 
  HTMLWebpackPlugin, que gera automaticamente um arquivo HTML com as tags necessárias para 
  carregar os arquivos JavaScript gerados pelo Webpack.
  */
  plugins: [
    new HTMLWebpackPlugin({
      // Especificando o template HTML a ser usado pelo plugin.
      // O Webpack vai gerar um arquivo HTML que incluirá automaticamente o bundle JavaScript.
      template: path.resolve(__dirname, "index.html"),
  
      // Especificando o favicon para ser incluído automaticamente no HTML gerado.
      // O Webpack irá adicionar automaticamente a tag <link rel="icon" href="path/to/favicon.ico"> no HTML gerado.
      favicon: path.resolve("src", "assets", "scissors.svg"),
    }),
  
    // Corrigindo a configuração do CopyWebpackPlugin
    new CopyWebpackPlugin({
      patterns: [
        {
          // O "from" é a pasta ou arquivos de origem a serem copiados.
          from: path.resolve(__dirname, "src", "assets"),
  
          // O "to" é o destino para onde os arquivos serão copiados.
          to: path.resolve(__dirname, "dist", "assets") // Corrigido para não adicionar a pasta "src" no destino
        }
      ]
    })
  ],  

  module: {
    rules: [
      // Definindo as regras para o carregamento de arquivos CSS.
      {
        test: /\.css$/i, // A regra se aplica a arquivos com a extensão .css
        use: [
          // 'style-loader' injeta o CSS no DOM, permitindo que seja aplicado no seu site.
          "style-loader",

          // 'css-loader' interpreta os arquivos CSS e os converte para o formato que o Webpack pode entender.
          "css-loader"
        ]
      },

      // Definindo a regra para o carregamento e transpile de arquivos JavaScript com Babel.
      {
        test: /\.js$/i, // A regra se aplica a arquivos com a extensão .js
        exclude: /node_modules/, // Exclui a pasta node_modules, já que não precisamos transpilar essas dependências
        use: {
          loader: "babel-loader", // Usando o Babel para transpilar o código JavaScript.
          options: {
            presets: ["@babel/preset-env"] // Usando o preset "@babel/preset-env" para garantir compatibilidade com versões mais antigas dos navegadores.
          }
        }
      }
    ]
  }
};
