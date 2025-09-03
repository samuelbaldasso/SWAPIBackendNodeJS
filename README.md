# Node Backend SWAPI

Este projeto é uma aplicação Node.js que consome a API do SWAPI (Star Wars API). A aplicação utiliza o framework Express para gerenciar as rotas e a biblioteca Axios para realizar requisições HTTP.

## Estrutura do Projeto

```
node-backend-swapi
├── src
│   ├── app.js               # Ponto de entrada da aplicação
│   ├── controllers          # Controladores para gerenciar as requisições
│   │   └── swapiController.js
│   ├── routes               # Definição das rotas da aplicação
│   │   └── swapiRoutes.js
│   └── services             # Serviços para interagir com a API do SWAPI
│       └── swapiService.js
├── package.json             # Configuração do npm e dependências
└── README.md                # Documentação do projeto
```

## Instalação

1. Clone o repositório:

   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:

   ```
   cd node-backend-swapi
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Execução

Para iniciar a aplicação, utilize o seguinte comando:

```
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## Endpoints

A aplicação expõe os seguintes endpoints:

- `GET /people` - Retorna uma lista de pessoas do universo Star Wars.
- `GET /planets` - Retorna uma lista de planetas do universo Star Wars.

## Autenticação e Documentação

- Acesse a documentação interativa da API em: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)
- Para acessar os endpoints protegidos, faça um POST em `/api/login` com JSON `{ "username": "seu_usuario", "password": "sua_senha" }` para obter um token JWT.
- Use o token JWT no header `Authorization: Bearer <token>` para acessar `/api/people` e `/api/planets`.

## Exemplo de uso do JWT

1. Faça login:
   ```bash
   curl -X POST http://localhost:3000/api/login -H "Content-Type: application/json" -d '{"username":"user","password":"123"}'
   ```
2. Use o token retornado para acessar endpoints:
   ```bash
   curl http://localhost:3000/api/people -H "Authorization: Bearer <seu_token>"
   ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License.
