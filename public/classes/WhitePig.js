import { ThePig } from './ThePig.js';
export class WhitePig extends ThePig {
    constructor(name, height, weight, personality, category, breed, run) {
        super(name, height, weight, personality, category, breed, run);
    }
    formatAll() {
        return `Name: ${this.name}
                Height: ${this.height}
                Weight: ${this.weight}
                Personality: ${this.personality}
                Category: ${this.category}
                Breed: ${this.breed}
                Running: ${this.ability}`;
    }
    format() {
        return `Name: ${this.name}
                Category: ${this.category}`;
    }
}
