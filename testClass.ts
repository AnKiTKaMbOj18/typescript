class Student{
    fullName: string;

    constructor(public firstName: string,public lastName: string){
        this.fullName=firstName+" "+lastName;
    }
}
interface Person{
    firstName: string;
    lastName: string;
}
function greeter(person: Person){
return "hello, "+ person.firstName+" "+person.lastName;
}
var user=new Student("peter","james");
//document.body.innerHTML = greeter(user);
//document.body.innerHTML = user.fullName;
console.log(greeter(user));
console.log(user.fullName);