class Animal {
    static category = 'Dog'
    static count = 0
    location = 'Khagrachori'
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
        Animal.count++;
    }
    static compare(animal1, animal2) {
        if (animal1.speed < animal2.speed) {
            return `${animal2.name} is Faster`
        } else {
            return `${animal1.name} is Faster`
        }
    }
}

const myRat = new Animal('rat', 120)
const myNewRat = new Animal('new rat', 15)

console.log(myRat.category)
console.log(myRat.location)
console.log(Animal.category)
console.log(Animal.location)

console.log(myRat.count)
console.log(Animal.count)

console.log(Animal.compare(myRat, myNewRat))