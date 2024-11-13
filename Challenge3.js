// Car and EV class definition (EV is a subclass of Car)
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

class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed); // Call parent constructor
        this.charge = charge; // charge in %
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`${this.make} battery charged to ${this.charge}%`);
    }

    accelerate() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}

// Create an EV instance and test
const tesla = new EV('Tesla', 120, 23);

tesla.accelerate();        
tesla.brake();             
tesla.chargeBattery(90);   
tesla.accelerate();        
