import { ThePig } from './ThePig.js'

export class BlackPig extends ThePig {
    constructor(name:string, height:number, weight:number, personality:string, category:string, breed:string, strength:number){
        super(name,height,weight,personality,category,breed,strength);
    }
    formatAll() {
        return `Name: ${this.name}
                Height: ${this.height}
                Weight: ${this.weight}
                Personality: ${this.personality}
                Category: ${this.category}
                Breed: ${this.breed}
                Strength: ${this.ability}`
    }
    format() {
        return `Name: ${this.name}
                Category: ${this.category}`
    }
}