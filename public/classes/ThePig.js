export class ThePig {
    constructor(name, height, weight, personality, category, breed, ability) {
        ThePig.idCounter = parseInt(localStorage.getItem("idCounter") || "0", 10);
        this._id = ThePig.idCounter;
        this._name = name;
        this._height = height;
        this._weight = weight;
        this._personality = personality;
        this._category = category;
        this._breed = breed;
        this._ability = ability;
        ThePig.idCounter++;
        localStorage.setItem("idCounter", ThePig.idCounter.toString());
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }
    get weight() {
        return this._weight;
    }
    set weight(weight) {
        this._weight = weight;
    }
    get personality() {
        return this._personality;
    }
    set personality(personality) {
        this._personality = personality;
    }
    get category() {
        return this._category;
    }
    set category(category) {
        this._category = category;
    }
    get breed() {
        return this._breed;
    }
    set breed(breed) {
        this._breed = breed;
    }
    get ability() {
        return this._ability;
    }
    set ability(ability) {
        this._ability = ability;
    }
    formatAll() {
        return `Name: ${this.name}
                Height: ${this.height}
                Weight: ${this.weight}
                Personality: ${this.personality}
                Category: ${this.category}
                Breed: ${this.breed}
                Ability: ${this.ability}`;
    }
    format() {
        return `Name: ${this.name}
                Category: ${this.category}`;
    }
}
ThePig.idCounter = 0;
