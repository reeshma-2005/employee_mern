const BodyParser=require('body-parser')
const Mongoose=require('mongoose')
const Cors=require('cors')
const jwt=require('jsonwebtoken')
const bcrpt=require('bcrypt')
const Express=require('express')
const employeeModel=require('./models/employee')
const userModel1=require('./models/users')
let app=Express()
app.use(BodyParser.urlencoded({extended:true}))
app.use(BodyParser.json())
app.use(Cors())
Mongoose.connect("mongodb+srv://reeshmasreenath81:reeshmasreenath81@cluster0.j6gueyg.mongodb.net/EmployeeDb1?retryWrites=true&w=majority",{useNewUrlParser:true})

app.post("/signin",(req,res)=>{
    res.send("signin working")
})

app.post("/employeeadd",async(req,res)=>{
    //res.send("signup is working")
    var data=req.body;
    var employee3=new employeeModel(data);
    await employee3.save(
        (err,data)=>{
            if (err) {
                res.json({"status":"Error","Error":err})
            } else {
               res.json({"Status":"Success","Data":data})  
            }
        }
    )
    console.log(data);

})


//employee list

app.post("/employeelist",(req,res)=>{
    //res.send("welcome");
    employeeModel.find(
        (err,data)=>{
            if (err) {
                res.json({"status":"Error","Error":err})
            } else {
               res.json(data)  
            }
        }
    )

})

//employee delete

app.delete('/employeelist/,id',(req,res)=>{
    
    var id=req.params.id;
    var data=req.body;
    employeeModel.findByIdAndDelete(id,(err,data)=>{
        if (err) {
                            
           res.json({"status":"Error","Error":err})
        } else {
            res.json({"Status":"Deleted","Data":data});
        }
    })
})

//employee edit

app.post('/employeelist/,id',(req,res)=>{
    //var id=req.body.id
    //var name=req.body.name;
    var id=req.params.id;
    var data=req.body;
    employeeModel.findOneAndUpdate(
        {
            "_id":id
        },data,(err,data)=>{
            if (err) {
                res.json({"Status":"Error","Error":err})
            } else {
                res.json({"Status":"Updated","Data":data})
            }
        }
    )
})

app.get('employeelist/,id',(req,res)=>{
    var id=req.params.id;
    var data=req.body;
    employeeModel.findById(id,(err,data)=>{
        if (err) {
           
           res.json({"status":"Error","Error":err})
        } else {
            res.json(data);
        }
    })
})

app.post("/login1",(req,res)=>{
    try{  
       var email=req.body.email;
       console.log(email);
       var password=req.body.password;
       let result=userModel1.find({email:email,password:password},(err,data)=>{
           console.log(data.length);
        if(data.length>0){
            res.json({"Status":"Success","data":data})
           }
              
           else{
               res.json({"Status":"Failed to Login","data":"Invalid"})
           }
       })
   }catch(error){
       console.log(error)
   }
   })


// app.put('employeelist',(req,res)=>{
//     var name=req.body.name;
//     var data=req.body;
//     employeeModel.findOneAndUpdate(
//         {
//             "name":name
//         },data,(err,data)=>{
//             if (err) {
//                 res.json({"Status":"Error","Error":err})
//             } else {
//                 res.json({"Status":"Updated","Data":data})
//             }
//         }
//     )
// })






app.listen(3003,()=>{
    console.log("App running")
})
