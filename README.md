# Trabalho 02 - DSDM

**Aluno:** Carlos Aldrim Freire Melo Filho

## Descrição

- Segundo trabalho dirigido de Desenvolvimento de Software para Dispositivos Móveis.

## Aplicação

Essa aplicação é um buscador de livros que se comunica com um Web Service através de requisições GET. A interface do usuário (UI) contém um campo de texto para a "chave de busca" e um botão "buscar". Quando o usuário clica em "buscar", é feita uma requisição GET para a API com a URI https://hn.algolia.com/api/v1/search?query=X, onde X é o valor da "chave de busca". Os resultados da busca, que incluem informações sobre os livros, são tratados e exibidos na UI.

Além disso, a aplicação oferece a funcionalidade de atribuir uma nota de 1 a 5 a cada livro listado. Cada livro na lista possui informações como autor, título, URL e a nota, representada por estrelas, que o usuário pode definir. A interface permite que o usuário avalie os livros usando um sistema de estrelas, proporcionando uma experiência interativa e informativa ao usuário.

## API

```shell
  https://hn.algolia.com/api/v1/search?query=X
```

## Capturas de Tela

![Captura de Tela 01](https://github.com/carlos-aldrim/TrabalhoDirigido01/blob/main/assets/Tela01.jpg);
![Captura de Tela 02](https://github.com/carlos-aldrim/TrabalhoDirigido01/blob/main/assets/Tela02.jpg);

## Tecnologias Utilizadas

- React Native
- HTML5
- CSS3
- React
- Typescript

## Pré-requisitos

- Node.js (v14 ou superior)
- npm (v7 ou superior)

## Instalação

1. Clone este repositório.

  ```shell
  git clone https://github.com/carlos-aldrim/TrabalhoDirigido02
  ```

2. Navegue até o diretório da aplicação.

  ```shell
  cd TrabalhoDirigido02
  ```

3. Instale as dependências.

  ```shell
  npm install
  ```

  4. Nota: Se você ainda não tem o Expo instalado globalmente, você pode instalá-lo usando o seguinte comando:

  ```shell
  npm install -g expo-cli
  ```

5. Inicie a aplicação.

  ```shell
  expo start
  ```

6. Após iniciar o projeto, um QR code será exibido no terminal e na página web. Para acessar a aplicação em seu dispositivo móvel, siga estas etapas:

- Certifique-se de que você tem o aplicativo "Expo Go" instalado em seu dispositivo móvel. Você pode baixá-lo na Play Store.
- Abra o aplicativo "Expo Go" em seu dispositivo.
- Toque na opção "Scan QR Code" ou similar no aplicativo Expo Go.
- Use a câmera do seu dispositivo para escanear o QR code exibido na página web ou no terminal.