const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const { userRoute } = require('./route/userRoute');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.text());
app.use(cookieParser());

app.use('/users',userRoute);

app.listen(serverConfig.PORT, () => {
    console.log(`server started at port ${serverConfig.PORT}`);
    connectDB();
});