class Greeter {
    greeting: string;
    constructor(greeting: string) {
        this.greeting=greeting;
    }
    greet(){
        return "hello, "+ this.greeting;
    }
}
let greeter=new Greeter("good afternoon sir");
console.log(greeter.greet());