import express from 'express';
import bodyparser from 'body-parser';

const app = express();

app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

app.get('/', function(req, res,) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello world");
});

app.listen(3001, () => console.log("Started listening at port 3001"));