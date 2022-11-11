const express       = require('express');
const app           = express();
const swaggerJsDoc  = require('swagger-jsdoc');
const swaggerUI     = require('swagger-ui-express');

app.get('/', (req, res) => {
    res.send('Testing out Swagger. What do you think?');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});