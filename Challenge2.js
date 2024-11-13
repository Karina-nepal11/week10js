// CarCl class definition using ES6
class CarCl {
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

    // Getter for speed in mi/h
    get speedUS() {
        return this.speed / 1.6; // Convert km/h to mi/h
    }

    // Setter for speed in mi/h
    set speedUS(speed) {
        this.speed = speed * 1.6; // Convert mi/h to km/h and set
    }
}

// Create an instance and test
const car3 = new CarCl('Ford', 120);

console.log(car3.speedUS); // Output the speed in mi/h
car3.accelerate();         
car3.brake();             

car3.speedUS = 50;         // Set speed in mi/h (will convert to km/h)
console.log(car3);         // Check updated speed in km/h
