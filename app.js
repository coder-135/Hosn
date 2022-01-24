const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const app = express();
const path = require('path');
const morgan = require("morgan");
const config = require("./utils/initializer");
const bodyParser = require('body-parser');

const userManagerRoutes = require('./services/userManagerService/route');
const studentManagerRoutes = require('./services/studentManagerService/route');

global.publicDir = __dirname + "/public/";



//middlewares
app.use(morgan('dev'));
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.use('/api',userManagerRoutes)
app.use('/api',studentManagerRoutes)



app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
    return res.sendFile(path.join( __dirname, 'dashboardPublic' , 'index.html'));
});



app.all("*", (req, res) => {
    res.status(404).json({
        message: "آدرس درخواستی مورد نظر موجود نمی باشد.",
    });
});


if (dotenv.error) {
    throw dotenv.error;
}


//run initial config
config.Initialize();


//run server
const port = process.env.SERVER_PORT || 8000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
