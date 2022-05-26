import express from 'express';
import routerUser from './src/api/routes/user.js';
// import routerCookies from './src/api/routes/cookies.js';
import routerMerchant from './src/api/routes/merchant.js';
import dotenv from 'dotenv';
import path from 'path';
import {fileURLToPath} from 'url';
import mustache from 'mustache';
import engines from 'consolidate';
import cookiesParser from 'cookie-parser';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());

//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//html dynamic content
app.set('views', __dirname + "/src/api/views");
app.engine('html', engines.mustache);

app.get('/', async (req, res) => {
    res.render('index.html')
})


//Route middleware
app.use('/api/user', routerUser);
app.use('/api/merchant', routerMerchant);


const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`server up and running at ${PORT}`));