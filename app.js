import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

var app = express();

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true,
  graphiql: true
})));

// Connect mongo database
mongoose.connect('mongodb://dev:dev@ds129422.mlab.com:29422/nodejs-graphql');

// start server
var server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});
