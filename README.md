# Para Rodar Backend   
- Criar arquivo .env com as seguintes configurações

    DB_HOST=localhost  

    DB_USER=postgres

    DB_PASS=localhost
    
    DB_NAME=projeto-interdisciplinar-5


- obs: você pode alterar o nome do banco para o criado em sua base, assim como o nome do usuário e senha de acordo com a sua configuração local
- Após configurar acima, entrar na pasta "back" e rodar o comando:  yarn sequelize db:migrate para rodar as migrações no banco de dados