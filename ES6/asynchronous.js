
//asynchromous
/*console.log("Hiiiiiiiiiiiii");
setTimeout(()=>{
    console.log("This is asynhronous statement")
},4000)
console.log("Hellooooooooooooooo");
console.log("Welcome to JavaScript");*/


/*async
 async function displayInfo()
{
    let x=10+20;
    return x;
}
let result=displayInfo()
result.then((data)=>{
console.log("result is  " +data)
})
*/

/*
async function displayInfo()
{
    let x=10,y=20;
    if(x<y){
        return "y value is biggest";
    }
    else{
        throw new Error;
    }    
}
let result=displayInfo();
result.then((data)=>{
    console.log("result is= "+data);
})
*/

/*
async function displayInfo()
{
    let x=20,y=10;
    if(x<y){
        return "y value is biggest";
    }    else
    {
        throw new Error;
    }    
}
let result=displayInfo();
result.then((data)=>{
    console.log("result is="+data);
})
result.catch((data)=>{
    console.log(data)
})*/


//async/await
async function displayInfo()
{
    let x=await 10+20;
    return x;
}
let result=displayInfo();
result.then((data)=>{
    console.log("result is="+data);
})
result.catch((data)=>{
    console.log(data);
})