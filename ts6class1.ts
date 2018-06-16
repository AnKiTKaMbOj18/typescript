class Animal{
    move(distanceInMeter: number = 0){
        console.log(`Animal moved ${distanceInMeter}.m`);
    }
}

class Dog extends Animal{
    bark(){
        console.log('woof! woof!');
    }
}
var dog=new Dog();
dog.move();
dog.bark();
dog.move(10);
dog.bark();