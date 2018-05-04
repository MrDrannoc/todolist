const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-parser');
const _ = require('lodash');
const serve = require('koa-static');

const router = require('./routes');

const app = new Koa();


const PORT = process.env.PORT || 4000;

const db = require('./models');
db.sequelize.sync()
.authenticate()
.then(() => console.log('models synced!'))
.catch(err => console.log(err));

app.context.db = db;
app.use(bodyParser());

app.use(serve(`${__dirname}/dist`));
app.use(router.routes())

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);
