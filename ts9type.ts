interface Named{
    name:string;
}

class Person{
    name:string;
}

function greet(n:Named){
    console.log("heloo "+n.name)
}

let p:Named;
p=new Person();
p.name="amit";
console.log(p.name);

let y={name:"amrit",location:"sydney"};
greet(y);