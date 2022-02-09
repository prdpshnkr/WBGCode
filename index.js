const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// graphql 
// const typeDefs = require('./graphql/schema');
// const { Query } = require('./graphql/resolvers/query');
// const { Mutation } = require('./graphql/resolvers/mutation');

// const app = express();
// const server = new ApolloServer({
//     typeDefs,
//     resolvers:{
//         Query,
//         Mutation
//     }
// })

// server.applyMiddleware({ app });

// Mongo

const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://graphiql:graphiql@graphql.d21uc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`);
    })
}).catch( err => {
    console.log(err)
})