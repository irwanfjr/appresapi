var mysql = require('mysql');

// BUAT KONEKSI DATABASE
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbresapi',
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;