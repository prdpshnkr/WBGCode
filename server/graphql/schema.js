const { gql } = require('apollo-server-express');
const User = require('../models/user')

const typeDefs = gql`
    type Query{
        user(id:ID!):User!
    }
    type Mutation {
        addUser(userInput: UserInput!): User!
    }
    type User {
        _id:ID!
        email:String!
        password:String
    }
    input UserInput {
        email: String!
        password: String!
    }
`;

module.exports = typeDefs;