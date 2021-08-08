class Tiger {
    #speed = 100
    location = 'Sundarban'
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`I am ${this.name}. I am running at ${this.#speed} mph`)
    }
}
const royal = new Tiger('Royal Bengal')
console.log(royal.location)
royal.run()