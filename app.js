import express, { json } from 'express';
import { appRouter } from './routes/app.route.js';
import { config } from './app.conf.js';

const app = express();
const {appConf} = config; 
app.use(json({extended: true}));
app.use('/', appRouter);

app.listen(appConf.port, () => {
    console.log('App has been started on port ', appConf.port)
})