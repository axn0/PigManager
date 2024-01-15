import { ThePig } from './ThePig.js';
export class GreyPig extends ThePig {
    constructor(name, height, weight, personality, category, breed, swim) {
        super(name, height, weight, personality, category, breed, swim);
    }
    formatAll() {
        return `Name: ${this.name}
                Height: ${this.height}
                Weight: ${this.weight}
                Personality: ${this.personality}
                Category: ${this.category}
                Breed: ${this.breed}
                Swimming: ${this.ability}`;
    }
    format() {
        return `Name: ${this.name}
                Category: ${this.category}`;
    }
}
