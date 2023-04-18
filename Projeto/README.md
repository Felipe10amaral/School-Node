# App

E-Order Service  app.

## RFs (Requisitos funcionais)

- [x] Deve ser possível cadastrar uma ordem de serviço;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o número da ordem de serviço;


- [x] Deve ser possível o usuário realizar login;
- [x] Deve ser possível validar o login de um usuário;
- [x] Deve ser possível cadastrar um usuário;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode listar notas sem estar logado;
- [x] O cliente só pode pesquisar uma nota de serviço que seja de algum serviço seu;
- [x] só um usuario logado poderá cadastrar uma nota de serviço;
- [x] Só um usuário poderá manipular(CRUD) uma nota de serviço;


## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco de dados;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);