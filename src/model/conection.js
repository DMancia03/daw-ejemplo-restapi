const mysql = require('mysql');

const dataConection = {
    host: 'remotemysql.com',
    user: '2DBLrjyvRY',
    password: 'XquSNeC1BL',
    database: '2DBLrjyvRY'
}

const mysqlConection = mysql.createConnection(dataConection);

mysqlConection.connect(function(error){
    if(error){
        console.log(error);
        return;
    }else{
        console.log('DB connected');
    }
});

module.exports = mysqlConection;