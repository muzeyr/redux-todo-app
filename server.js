var mysql = require('mysql');
var http = require('http');
var url = require('url');
var myParser = require("body-parser");
var express = require("express");
var app = express();

app.use(myParser.urlencoded({extended: true}));
var con = mysql.createConnection({host: "zcntech.com", user: "muzeyr_db", password: "m0320532"});
 
app.get("/list", function (request, response) {

    con
        .connect(function (err) {
            if (err) 
                throw err;
            con
                .query("SELECT * FROM muzeyrco_db.golive_raflar", function (err, result, fields) {
                    if (err) 
                        throw err;

                    response.send(result);
                    //console.log(result.length);
                    /*
                    for (let i = 0; result.length > i; i++) {
                        console.log(result[i].id + '  >>' + result[i].raf_adi);
                    }*/
                });
        });

});

app.post("/list", function (request, response) {

    con
        .connect(function (err) {
            if (err) 
                throw err;
            con
                .query("SELECT * FROM muzeyrco_db.golive_raflar", function (err, result, fields) {
                    if (err) 
                        throw err;

                    response.send(result);
                    //console.log(result.length);
                    /*
                    for (let i = 0; result.length > i; i++) {
                        console.log(result[i].id + '  >>' + result[i].raf_adi);
                    }*/
                });
        });

});
app.listen(8088);
/*
var app = express();
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    var q = url
        .parse(req.url, true)
        .query;
    var txt = q.year + "vv " + q.month;
    res.end(txt);
}).listen(8088);
*/
