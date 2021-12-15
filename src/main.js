const json = require('body-parser')
const express = require('express')
const api = require('./controller/api')

const app = express()
const port = 8080

app.use(json())
app.use((req, res, next) => {
    console.log('req url', req.url);
    console.log('req body', req.body);
    console.log('req query', req.query);
    console.log('req params', req.params);
    next();
});

api(app);

app.listen(port, () => {
    console.log(`jazz-map app listening at http://localhost:${port}`)
})