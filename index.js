function trimProperties(obj) {
  const result = {};
  for (let prop in obj) {
    result[prop] = obj[prop].trim();
  }
  return result;
}

function trimPropertiesMutation(obj) {
  for (let prop in obj) {
    obj[prop] = obj[prop].trim();
  }
  return obj;
}

function findLargestInteger(integers) {
  let largest = integers[0];
  Object.keys(integers).map((int) => {
    if (integers[int].integer > largest.integer) {
      largest = integers[int];
    }
  });
  return largest.integer;
}

class Counter {
  constructor(initialNumber) {
    this.count = initialNumber;
    this.baseline = false;
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    if (!this.baseline) {
      this.baseline = true;
      return this.count;
    } else if (this.count === 0) {
      return 0;
    } else {
      return (this.count -= 1);
    }
  }
}
const counter = new Counter(3);
console.log(counter.countDown());
console.log(counter.countDown());
console.log(counter.countDown());
console.log(counter.countDown());

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    // ✨ initialize whatever properties are needed
    this.seasons = ['summer', 'fall', 'winter', 'spring'];
    this.currentSeason = 0;
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    const result = this.seasons[this.currentSeason];
    if (this.currentSeason === 3) {
      this.currentSeason = 0;
    } else {
      ++this.currentSeason;
    }
    return result;
  }
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0; // car initilizes with zero miles
    this.tank = tankSize; // car initiazes full of gas
    this.mpg = mpg;
    this.tankSize = tankSize;
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    const milesCanDrive = this.tank * this.mpg;
    if (distance <= milesCanDrive) {
      this.odometer = this.odometer + distance;
      this.tank = this.tank - distance / this.mpg;
    } else {
      this.odometer = this.odometer + milesCanDrive;
      this.tank = 0;
    }
    return this.odometer;
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    const gallonsThatFit = this.tankSize - this.tank;
    if (gallons <= gallonsThatFit) {
      this.tank = this.tank + gallons;
    } else {
      this.tank = this.tankSize;
    }
    return this.tank * this.mpg;
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */

async function isEvenNumberAsync(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new Error('number must be a number');
  }
  return number % 2 === 0 || false;
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
};
