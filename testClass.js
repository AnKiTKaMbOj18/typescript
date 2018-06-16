var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("peter", "james");
//document.body.innerHTML = greeter(user);
//document.body.innerHTML = user.fullName;
console.log(greeter(user));
console.log(user.fullName);
