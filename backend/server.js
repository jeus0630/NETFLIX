const express = require('express');
const dotenv = require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
const db = require('./config/db');
const app = express();

const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute); 
app.use("/api/movies",movieRoute); 
app.use("/api/lists",listRoute);

const main = () => {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`Backend server is running on port ${process.env.PORT || 8080}`);
    })
} 

db.connect(main);