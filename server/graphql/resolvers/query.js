const { AuthenticationError } = require('apollo-server-express')
const { User } = require('../../models/user');

module.exports = {
    Query:{
        user: async(parent,args,context,info)=>{
            try{
                const user = await User.findOne({'_id':args.id});

                if(req._id.toString() !== user._id.toString()){
                    throw new AuthenticationError("You dont own this user")
                }
                return user;
            }catch(err){
                throw new AuthenticationError("You dont own this user");
            }
        }
    }
}