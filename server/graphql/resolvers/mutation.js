const { User } = require('../../models/user');
const {AuthenticationError } = require('apollo-server-express')

module.exports = {
    Mutation:{
        addUser: async(parent,args,context,info)=>{
            try{
                const user = new User({
                    email: args.userInput.email,
                    password: args.userInput.password
                });
                const result = await user.save();
                return {
                    ...result._doc
                }
            } catch(err){
                throw err
            }
        },
    }
}