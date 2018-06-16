interface Person{
    firstName:string;
    lastName:string;

}
function greeter(person: Person){
    return "hello, "+person.firstName +" "+person.lastName;
}
let user={firstName:"jane",lastName:"sim"};
document.body.innerHTML=greeter(user);