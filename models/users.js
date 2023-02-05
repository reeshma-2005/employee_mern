const Mongoose=require("mongoose")
const UserSchema1=Mongoose.Schema(
    {
        email:String,
        password:String
    }
)
const userModel1=Mongoose.model("employees1",UserSchema1)
module.exports=userModel1