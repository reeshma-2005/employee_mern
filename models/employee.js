const Mongoose=require('mongoose')
const employeeSchema=Mongoose.Schema(
    {
        name:String,
        location:String,
        position:String,
        salary:Number,
        email:String,
        password:String
    
    }
  );

  var employeeModel=Mongoose.model("Employees1", employeeSchema);
  module.exports=employeeModel