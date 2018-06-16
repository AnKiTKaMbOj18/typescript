class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Admin extends Person {

}

class Manager extends Person {

}
//valid function,just commented to test other
/* function echo<T>(arg:T):T{
    return arg;
} 
 var str=echo(1);
console.log(typeof str); */

let admin = new Admin("admin", "here");
let manager = new Manager("manager", "here");

function personEcho<T extends Person>(person: T): T {
    console.log(person.getFullName());
    return person;
}

let testAdmin = personEcho(admin);
let testManager = personEcho(manager);


