console.log("First Statement");
const display=()=>{
    let sum=0;
    for(let i=1;i<=100000; i++){
        sum=sum+i;
    }
    console.log("Sum of i value is="+sum);
}
display();
console.log("Second statement")