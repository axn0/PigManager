import { HasFormatter } from '../interfaces/HasFormatter.js'

export class ThePig implements HasFormatter {
    private static idCounter: number = 0;
    private _id: number;
    private _name: string;
    private _height: number;
    private _weight: number;
    private _personality: string;
    private _category: string;
    private _breed: string;
    private _ability: string|number;

    constructor(name:string, height:number, weight:number, personality:string, category:string, breed:string, ability:string|number){
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
    get id(): number {
        return this._id;
    }
    set id(id:number) {
        this._id = id;
    }
    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    get height(): number {
        return this._height;
    }
    set height(height: number) {
        this._height = height;
    }
    get weight(): number {
        return this._weight;
    }
    set weight(weight: number) {
        this._weight = weight;
    }
    get personality(): string {
        return this._personality;
    }
    set personality(personality: string) {
        this._personality = personality;
    }
    get category(): string {
        return this._category;
    }
    set category(category: string) {
        this._category = category;
    }
    get breed(): string {
        return this._breed;
    }
    set breed(breed: string) {
        this._breed = breed;
    }
    get ability(): string|number {
        return this._ability;
    }
    set ability(ability: string|number) {
        this._ability = ability;
    }
    
    formatAll() {
        return `Name: ${this.name}
                Height: ${this.height}
                Weight: ${this.weight}
                Personality: ${this.personality}
                Category: ${this.category}
                Breed: ${this.breed}
                Ability: ${this.ability}`
    }
    format() {
        return `Name: ${this.name}
                Category: ${this.category}`
    }
}