import { BlackPig } from './classes/BlackPig.js';
import { ChestnutPig } from './classes/ChestnutPig.js';
import { GreyPig } from './classes/GreyPig.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { ThePig } from './classes/ThePig.js';
import { WhitePig } from './classes/WhitePig.js';
// breed options according to category
const breedOptions = {
    black: ["Potbelly", "Iberian"],
    chestnut: ["Duroc", "Hereford"],
    grey: ["Bisaro", "Grigio"],
    white: ["Chester", "Welsh"]
};
// ability options according to category
const abilityOptions = {
    black: "Strength: ",
    chestnut: "Language: ",
    grey: "Swimming: ",
    white: "Running: "
};
// update breed options according to category
const categorySelect = document.getElementById("category");
const breedSelect = document.getElementById("breed");
function updateBreedOptions() {
    const selectedCategory = categorySelect.value;
    const breeds = breedOptions[selectedCategory];
    //clear existing options
    breedSelect.innerHTML = "";
    //populat breed options
    for (const breed of breeds) {
        const option = document.createElement("option");
        option.value = breed.toLowerCase();
        option.textContent = breed;
        breedSelect.appendChild(option);
    }
}
// update ability based on the category
const abilityInput = document.getElementById("ability");
function updateAbility() {
    const selectedCategory = categorySelect.value;
    const ability = abilityOptions[selectedCategory];
    const ability_label = document.getElementById("ability_label");
    if (selectedCategory == "chestnut") {
        ability_label.innerText = ability;
        abilityInput.type = "text";
    }
    else {
        ability_label.innerText = ability + "(0-100)";
        abilityInput.type = "number";
        abilityInput.min = "0";
        abilityInput.max = "100";
        abilityInput.value = "";
    }
}
// add event listener to category
categorySelect.addEventListener("change", updateBreedOptions);
categorySelect.addEventListener("change", updateAbility);
// initialize according to category
updateBreedOptions();
updateAbility();
const form = document.querySelector(".new-pig-form");
const name = document.querySelector("#name");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const personality = document.querySelector("#personality");
const category = document.querySelector("#category");
const breed = document.querySelector("#breed");
const ability = document.querySelector("#ability");
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// add event listener to form upon submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm()) {
        alert("Please fill out all fields before adding a new pig");
    }
    else {
        let newPig;
        let theName = name.value;
        let theHeight = height.valueAsNumber;
        let theWeight = weight.valueAsNumber;
        let thePersonality = personality.value;
        let theCategory = category.value;
        let theBreed = breed.value;
        let theAbility = ability.valueAsNumber;
        // create new colorPig object
        if (theCategory === 'black') {
            newPig = new BlackPig(theName, theHeight, theWeight, thePersonality, theCategory, theBreed, theAbility);
        }
        else if (theCategory === 'chestnut') {
            let theAbility = ability.value;
            newPig = new ChestnutPig(theName, theHeight, theWeight, thePersonality, theCategory, theBreed, theAbility);
        }
        else if (theCategory === 'grey') {
            newPig = new GreyPig(theName, theHeight, theWeight, thePersonality, theCategory, theBreed, theAbility);
        }
        else {
            newPig = new WhitePig(theName, theHeight, theWeight, thePersonality, theCategory, theBreed, theAbility);
        }
        // add new colorPig to localStorage with previous objects in order by category, then name within category
        let pigData = localStorage.getItem("pigData"); // pigData is a string
        let old_data = [];
        // if there is something in localStorage, parse it into an array of objects
        if (pigData) {
            old_data = JSON.parse(pigData).map((item) => {
                const { _id, _name, _height, _weight, _personality, _category, _breed, _ability } = item;
                let somePig;
                switch (_category) {
                    case 'black':
                        somePig = new BlackPig(_name, _height, _weight, _personality, _category, _breed, _ability);
                        break;
                    case 'chestnut':
                        somePig = new ChestnutPig(_name, _height, _weight, _personality, _category, _breed, _ability);
                        break;
                    case 'grey':
                        somePig = new GreyPig(_name, _height, _weight, _personality, _category, _breed, _ability);
                        break;
                    case 'white':
                        somePig = new WhitePig(_name, _height, _weight, _personality, _category, _breed, _ability);
                        break;
                    default:
                        somePig = new ThePig(_name, _height, _weight, _personality, _category, _breed, _ability);
                        console.log("Unable to parse pig.");
                        break;
                }
                somePig.id = _id;
                return somePig;
            });
        }
        // add newPig to the array of objects, old_data
        old_data.push(newPig);
        // sort the array of objects by category, then by name, then by id
        old_data.sort((a, b) => {
            if (a.category < b.category) {
                return -1;
            }
            if (a.category > b.category) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            if (a.id < b.id) {
                return -1;
            }
            if (a.id > b.id) {
                return 1;
            }
            return 0;
        });
        // store the new sorted array of objects back into localStorage
        localStorage.setItem('pigData', JSON.stringify(old_data));
        // clear the previously rendered arry of objects
        list.clearList();
        // render the new array of objects
        old_data.forEach((pig) => {
            list.render(pig);
        });
        height.value = "";
        weight.value = "";
        ability.value = "";
    }
});
function validateForm() {
    return (name.value.trim() !== "" &&
        height.valueAsNumber > 0 &&
        weight.valueAsNumber > 0 &&
        personality.value.trim() !== "" &&
        category.value.trim() !== "" &&
        breed.value.trim() !== "" &&
        (ability.type === "text" || (ability.valueAsNumber >= 0 && ability.valueAsNumber <= 100)));
}
function initialRender() {
    let pigData = localStorage.getItem("pigData"); // pigData is a string
    let old_data = [];
    // if there is something in localStorage, parse it into an array of objects
    if (pigData) {
        old_data = JSON.parse(pigData).map((item) => {
            const { _id, _name, _height, _weight, _personality, _category, _breed, _ability } = item;
            let somePig;
            switch (_category) {
                case 'black':
                    somePig = new BlackPig(_name, _height, _weight, _personality, _category, _breed, _ability);
                    break;
                case 'chestnut':
                    somePig = new ChestnutPig(_name, _height, _weight, _personality, _category, _breed, _ability);
                    break;
                case 'grey':
                    somePig = new GreyPig(_name, _height, _weight, _personality, _category, _breed, _ability);
                    break;
                case 'white':
                    somePig = new WhitePig(_name, _height, _weight, _personality, _category, _breed, _ability);
                    break;
                default:
                    somePig = new ThePig(_name, _height, _weight, _personality, _category, _breed, _ability);
                    console.log("Unable to parse pig.");
                    break;
            }
            somePig.id = _id;
            return somePig;
        });
    }
    // render the array of objects
    old_data.forEach((pig) => {
        list.render(pig);
    });
}
// first open webpage, if there is data in localStorage, render it
initialRender();
