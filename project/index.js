/*const express=require('express')
const app=express();

const PORT=6677;

app.get("/user",(req,res)=>{
    return res.json("This is Read or get method")
})
app.get("/user1",(req,res)=>{
    return res.json("This is user1 end point with get method");
})
app.post("/post",(req,res)=>{
    return res.json("This is Post or create method")
})
app.put("/put",(req,res)=>{
    return res.json("this is put or update method")
})

app.delete("/delete",(req,res)=>{
    return res.json("this is delete method")
})

app.listen(PORT,()=>{
    console.log(`My Server is running on ${PORT} number`);
})   */




//callback
/*
function greet(name, callback)
{
    console.log(name);
    callback();
}
function welcome(){
    console.log("this is an example program on callback function")
}
greet("tejasree",welcome);*/



//async
/*
 async function test(){
    x=10+20;
    console.log("inside of the function");
    return x;
 }
 let res=test();
 console.log("result is="+res);*/



 //async with then method
 /*
 async function test(){
    x=10+20;
    console.log("inide of the function");
    return x;
 }
 let res=test();
 res.then((data)=>{ 
    console.log(data)

 })*/
 



 


//async with then and catch
/*
async function test(){
    x=10+20;
    console.log("inside of the function")
    return x;
}
let res=test();
res.then((data)=>{
    console.log(data)
})
res.catch((error)=>{
    console.log(error);
})*/



//async/await with then & cathc block
/*
async function test(){
    x=await 10+20;
    console.log("inside of the function")
    return x;
}
let res=test();
res.then((data)=>{
    console.log(data)
})
res.catch((error)=>{
    console.log(error);
})*/

const express=require('express')
const MongoClient=require('mongoose')
const dotEnv=require('dotenv')
const app=express();
const EmployeeRoute=require('./route/EmployeeRoutes');
const Employee=require('./model/Employee');
const bodyParser=require('body-Parser');

dotEnv.config();
app.use(bodyParser.json())

const PORT=process.env.PORT||5566;;

MongoClient.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB atlas connected successfully")
})
.catch((err)=>{
    console.log(err);
})

app.use("/employees",EmployeeRoute);

app.listen(PORT,()=>{
 console.log(`My Project working on ${PORT} number`)
})