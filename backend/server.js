const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
  

const app=express();
app.use(express.json())
app.use(cors())

 

app.listen(9000,async(req,res)=>{
    console.log("running")
})
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/git')

.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ MongoDB Error:', err));

 
 
tableschema=mongoose.Schema({
f:String,
s:String,
t:String,
p:String


})

tablemodel= mongoose.model("ff",tableschema,"ff")

app.post("/table",async(req,res)=>{
const result= new tablemodel({
    f:req.body.first,
    s:req.body.first1, 
    t:req.body.first2
})

const rr=await result.save()
if(rr){
    res.send({statuscode:1})
}else{
    res.send({statuscode:0})
}
})


app.get("/st",async(req,res)=>{
const result= await tablemodel.find()

if(result){
    res.send({statuscode:1, data:result})
}
else{
        res.send({statuscode:0})

}
})
