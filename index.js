// Express
const express = require('express');
const app = express();

// Cors

const cors = require('cors');
app.use(cors());

// Graphql 
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./server/graphql/schema');
const { Query } = require('./server/graphql/resolvers/query');
const { Mutation } = require('./server/graphql/resolvers/mutation');

const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Mutation
    },
})

server.start().then(res => {
    server.applyMiddleware({ app });
});

// Mongo
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
mongoose.connect(`mongodb+srv://graphiql:graphiql@graphql.d21uc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`);
    })
}).catch( err => {
    console.log(err)
})