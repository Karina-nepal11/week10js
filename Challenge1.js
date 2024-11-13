// Car class definition
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed; // speed in km/h
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}

// Create car instances and test
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate(); 
car1.brake();      
car2.accelerate();
car2.brake();     
