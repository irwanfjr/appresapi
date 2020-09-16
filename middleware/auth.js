var mysql = require('mysql');
var md5 = require('MD5');
var jwt = require('jsonwebtoken');
var connection = require('../koneksi');
var ip = require('ip');
var response = require('../res');
var config = require('../config/secret');
const { connect } = require('../koneksi');

// CONTROLLER UNTUK REGISTER
exports.registrasi = function (req, res) {
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,
        tanggal_daftar: new Date(),
    }

    var query = 'SELECT email from ?? where ??=?';
    var table = ["user", "email", post.email];

    query = mysql.format(query, table);

    connection.query(query, function (error, rows) {
        if (error) {
            console.log(error);
        } else {
            if (rows.length == 0) {
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];
                query = mysql.format(query, table);
                connection.query(query, post, function (error, rows) {
                    if (error) {
                        console.log(error);
                    } else {
                        response.ok("Berasil menambahkan data user baru.", res);
                    }
                });
            } else {
                response.ok("Email sudah terdaftar!", res);
            }
        }
    })
}