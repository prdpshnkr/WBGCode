const { User } = require('../../models/user');
const { UserInputError, AuthenticationError, ApolloError } = require('apollo-server-express')

module.exports = {
    Mutation:{
        hello: async(parent,args,context,info)=>{
            try{
                /// CHECK THE MAIL

            } catch(err){
                throw err
            }
        },
    }
}