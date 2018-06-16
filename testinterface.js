function greeter(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "jane", lastName: "sim" };
document.body.innerHTML = greeter(user);
