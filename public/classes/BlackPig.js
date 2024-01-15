import { ThePig } from './ThePig.js';
export class BlackPig extends ThePig {
    constructor(name, height, weight, personality, category, breed, strength) {
        super(name, height, weight, personality, category, breed, strength);
    }
    formatAll() {
        return `Name: ${this.name}
                Height: ${this.height}
                Weight: ${this.weight}
                Personality: ${this.personality}
                Category: ${this.category}
                Breed: ${this.breed}
                Strength: ${this.ability}`;
    }
    format() {
        return `Name: ${this.name}
                Category: ${this.category}`;
    }
}
