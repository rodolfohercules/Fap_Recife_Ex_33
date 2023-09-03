const mysql = require('mysql2');

// Configuração da conexão com o banco de dados
const userDbConfig = {
    host: 'localhost',     // Host do banco de dados
    user: 'user_root',   // Nome de usuário do banco de dados
    password: '123', // Senha do banco de dados
    database: 'user_db'    // Nome do banco de dados
};

// Criar uma conexão com o banco de dados
const connection = mysql.createConnection(userDbConfigdbConfig);

// Tentar se conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.message);
        return;
    }
    console.log('Conexão bem-sucedida com o banco de dados!');

    // Você pode executar consultas ou outras operações com o banco de dados aqui

    // Fechar a conexão com o banco de dados quando terminar
    connection.end((err) => {
        if (err) {
            console.error('Erro ao fechar a conexão com o banco de dados: ' + err.message);
        } else {
            console.log('Conexão com o banco de dados fechada com sucesso.');
        }
    });
});
