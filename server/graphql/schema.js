const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query{
        user(id:ID!):User!
    }
    type Mutation {
        hello: String
    }
    type User {
        _id:ID!
        firstname:String
        lastname:String
        email:String!
        password:String
        token:String
    }
`;

module.exports = typeDefs;