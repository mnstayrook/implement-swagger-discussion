const express       = require('express');
const app           = express();
const swaggerJsDoc  = require('swagger-jsdoc');
const swaggerUI     = require('swagger-ui-express');

// data parser - used to parse post data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
            version: '1.0.0'
        }
    },
    apis: ['app.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /tests:
 *  get:
 *      description: Get all of the tests
 *      responses:
 *          200:
 *              description: Success
 * 
 */

app.get('/tests', (req, res) => {
    res.send([
        {
            test:           '1',
            title:          'First Test',
            description:    'This is the first test of the system.'
        }
    ]);
});

/**
 * @swagger
 * /test:
 *  post:
 *      description: Post a test
 *      parameters:
 *        - name: title
 *          description: test title
 *          in: body
 *          required: true
 *          type: string
 *      responses:
 *          200:
 *              description: Success
 */

 app.post('/test', (req, res) => {
    const title = req.body.title;
    res.send({title});
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});