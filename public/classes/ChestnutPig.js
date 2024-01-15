import { ThePig } from './ThePig.js';
export class ChestnutPig extends ThePig {
    constructor(name, height, weight, personality, category, breed, language) {
        super(name, height, weight, personality, category, breed, language);
    }
    formatAll() {
        return `Name: ${this.name}
                Height: ${this.height}
                Weight: ${this.weight}
                Personality: ${this.personality}
                Category: ${this.category}
                Breed: ${this.breed}
                Language: ${this.ability}`;
    }
    format() {
        return `Name: ${this.name}
                Category: ${this.category}`;
    }
}
