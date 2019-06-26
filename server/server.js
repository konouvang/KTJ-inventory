require('dotenv').config();
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const secretsRouter = require('./routes/secrets.router');
const allusersRouter = require('./routes/allusers.router');
const inventoryRouter = require('./routes/inventory.router');
const imageurlRouter = require('./routes/image-url.router');

const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/secrets', secretsRouter);  // Might not need?
app.use('/api/allusers', allusersRouter); // Might not need?
app.use('/api/inventory', inventoryRouter);
app.use('/api/imageurl', imageurlRouter);

app.use('/s3', UploaderS3Router({
  bucket: 'ktjinventory',                           // required
  region: 'us-east-2',                            // optional
  headers: {'Access-Control-Allow-Origin': '*'},  // optional
  ACL: 'public-read',                                 // this is the default - set to `public-read` to let anyone view uploads
}));

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
