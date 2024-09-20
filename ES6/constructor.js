 //using constructor
 class Student{
    constructor(){
        this.id=101;
        this.name='Ajay'
    }    
    showDetails(){
        console.log(this.id+" "+this.name)
    }
}
let s=new Student();
s.showDetails();

//using constructor with parameters
class Student{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    showDetails(){
        console.log(this.id+" "+this.name)
    }
    displayInfo(){
        console.log("This is displayInfo method")
    }}
let S=new Student(2003, "tejuu");
S.showDetails();
S.displayInfo();

//without using constructors 
class Student{
    id=1005;
    name="manuuuu";
    showDetails(){
        console.log(this.id+" "+this.name)
    }
   }
let X=new Student();
X.showDetails();
