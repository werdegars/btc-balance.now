var express       = require('express');
var bodyParser    = require('body-parser');
var fs            = require('fs');
var cookieSession = require('cookie-session')
var fetch         = require('node-fetch');
var validator     = require('validator');
var sanitizer     = require('express-sanitizer');
var helmet        = require('helmet');
var dotenv        = require('dotenv')
var app           = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname));
app.use(express.static("public"));

app.disable('x-powered-by')
app.use(sanitizer())
app.use(helmet());
dotenv.load();
app.use(cookieSession({
    secret: process.env.SECRET,
    cookie: {
        maxAge:60000,
        httpOnly: true,
        secure: true
    }
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/check', function(req, res, next) {
    var address = validator.escape(req.sanitize(req.body.url)).toString();
    var fetchLink = 'https://blockchain.info/q/addressbalance/' + address
    var hrefLink = 'https://blockchain.info/address/' + address;

    fetch(fetchLink)
        .then(res => res.text())
        .then(body => {
            if ((body.indexOf('Illegal character') != -1) || (body.indexOf('Input too short') != -1) || (body.indexOf('Checksum does not validate')) != -1) {
                var response = 'doesn\'t seem like a valid BTC address.';
                fs.readFile(__dirname + '/status.html', function(err, data) {
                    if (err) {
                        throw err;
                    }
        
                    var html = data.toString();
                    var html = html.replace(/{{SITE_LINK}}/g, fetchLink);
                    var html = html.replace(/{{SITE}}/g, address);
                    var html = html.replace(/{{STATUS}}/g, response);
        
                    return res.send(html);
                }) 
            } else {
                var response = 'contains ' + body + ' satoshi.';
                fs.readFile(__dirname + '/status.html', function(err, data) {
                    if (err) {
                        throw err;
                    }
        
                    var html = data.toString();
                    var html = html.replace(/{{SITE_LINK}}/g, hrefLink);
                    var html = html.replace(/{{SITE}}/g, address);
                    var html = html.replace(/{{STATUS}}/g, response);
        
                    return res.send(html);
                })
            }
        })
});

app.use(function (err, req, res, next) {
    console.log(err)
    res.status(500).send('Something broke!')
});

const port = process.env.PORT || 3000;
app.listen(port);