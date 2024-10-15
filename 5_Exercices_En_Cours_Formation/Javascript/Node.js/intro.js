let http = require('http'),
    url = require('url'),
    dt = require('./module1');

http.createServer(
    function(req, res){
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        });
        let q = url.parse(req.url, true).query;
        let txt = q.annee + ' ' + q.mois;
        res.write('<p>Il est actuellement: '+dt.myDateTime()+'<br></p>');
        res.write(req.url+'<br>');
        res.end(txt);
    }
).listen(8080);