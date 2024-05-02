<p align="center"><img src="https://raw.githubusercontent.com/paulo-leo/terv/main/src/assets/logo.png" width="300" alt="Laravel Logo"></p>

# Terv.JS

## Electron + React + Vite 

Desbrave o Terv.JS: a rota rápida e descomplicada para criar aplicativos desktops. Combinando ElectronJS, React e Vite, o Terv simplifica a comunicação e agiliza o desenvolvimento. Construa e empacote sua solução de software desktop de forma simples e eficaz, com integrações avançadas ao sistema operacional.

## Este modelo fornece uma configuração mínima para fazer o React e o Electron funcionar no Vite.



## Para começar a usar o Terv, siga estas instruções:

1. Clone este repositório para sua máquina local.
2. Renomeie o arquivo `.env-example` para `.env` e configure os valores conforme necessário.
3. Personalize o projeto de acordo com suas necessidades, modificando ou adicionando arquivos conforme desejado.
4. Execute o comando `npm install` para instalar as dependências necessárias.
5. Inicie o projeto com o comando `npm start`.

## Mais sobre o Terv.js
O Terv.JS é um template construído com base no ElectronJS, ReactJS e Vite. Em essência, o Terv não introduz novas funcionalidades em relação a essas tecnologias; ele serve como uma maneira simples e direta de iniciar um projeto rapidamente. O Terv já vem com um arquivo de configuração e carregamento pré-configurado para facilitar a extensão.

Sinta-se à vontade para personalizar o template Terv conforme suas necessidades; sua contribuição é valorizada. Para começar, basta clonar o projeto em sua máquina e renomear o arquivo .env-example para .env. Este arquivo contém configurações importantes sobre como iniciar o Terv. Além disso, o Terv já inclui uma página inicial com botões de aplicativos personalizados, que podem servir como ponto de partida, embora você tenha total liberdade para personalizá-la conforme desejar.

Antes de visualizar seu aplicativo, certifique-se de executar o comando npm install para instalar todas as dependências. É possível também modificar a dependência do Electron; nesse caso, recomendamos remover a dependência do Electron do arquivo package.json e, em seguida, executar o comando npm install para, posteriormente, instalar a versão desejada do Electron, levando em consideração a arquitetura.

Após instalar todas as dependências necessárias, você pode iniciar seu projeto com o comando:
```bash
  npm start
```
## Configurações do Arquivo .env

No arquivo de configurações `.env`, você poderá ajustar os seguintes comandos:

- **ENVIRONMENT**: Define se a aplicação está rodando em modo de desenvolvimento (dev) ou produção (prod). Valores aceitos: `dev` ou `prod`.
- **ENVIRONMENT_DEV_URL**: URL do aplicativo quando o `ENVIRONMENT` está definido como `dev`.
- **ENVIRONMENT_PROD_URL**: URL do aplicativo quando o `ENVIRONMENT` está definido como `prod`.
- **OPEN_DEV_TOOLS**: Indica se as ferramentas de desenvolvimento no aplicativo estarão ativadas.
- **CONTROLLER_PATH**: Diretório onde são carregadas suas classes controladoras para IPC (Inter-Process Communication). Use o módulo IPC: https://github.com/paulo-leo/terv-ipc 
- **WINDOW_WIDTH**: Largura da janela do aplicativo ao iniciar.
- **WINDOW_HEIGHT**: Altura da janela do aplicativo ao iniciar.
- **WINDOW_FRAME**: Indica se o aplicativo usará uma estrutura de janela ao iniciar.
- **WINDOW_CACHE**: Indica se o aplicativo fará cache.
- **WINDOW_HIDE_MENU_BAR**: Indica se o menu do aplicativo será exibido.

Desenvolvido por: Paulo Leonardo da S. Cassimiro
