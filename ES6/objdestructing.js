//object literal concept
let person={
    firstName:"teju",
    lastName:"shaga",
    job:"student"
}
console.log(person);
console.log(person.firstName);

//object destructuring
let Person={
    firstName:"tejasree",
    lastName:"shaga"
}
const {firstName,lastName}=Person;

console.log(firstName);

//using new keyword
let student=new Object();
student.id=1004;
student.name="Manasa";
console.log(student.id+" "+student.name);