class SmartDevice {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    charging() {
        console.log('I am charging')
    }
}
class Phone extends SmartDevice {
    constructor(name, price, camera) {
        super(name, price)
        this.camera = camera;
    }
    sendSms() {
        console.log('I am sending text to my gf')
    }
}

class Watch extends SmartDevice {
    constructor(name, price, distance) {
        super(name, price)
        this.distance = distance;
    }
}

class Tablet extends SmartDevice {
    constructor(name, price, isWifi) {
        super(name, price)
        this.isWifi = isWifi
    }
}

const samsu = new Phone('Samsung', 60000, '16MP')
console.log(samsu)
samsu.charging()