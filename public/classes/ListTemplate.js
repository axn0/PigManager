import { BlackPig } from './BlackPig.js';
import { ChestnutPig } from './ChestnutPig.js';
import { GreyPig } from './GreyPig.js';
import { WhitePig } from './WhitePig.js';
import { ThePig } from './ThePig.js';
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    // creates an li element and appends to this ul
    render(item) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        switch (item.category) {
            case 'black':
                item;
                break;
            case 'chestnut':
                item;
                break;
            case 'grey':
                item;
                break;
            case 'white':
                item;
                break;
            default:
                console.log("unable to cast pig to a colour");
                break;
        }
        p.innerText = item.format();
        li.append(p);
        const moreInfoButton = document.createElement('button');
        moreInfoButton.textContent = 'More Info';
        moreInfoButton.addEventListener('click', () => {
            if (moreInfoButton.textContent == 'More Info') {
                p.innerText = item.formatAll();
                moreInfoButton.textContent = 'Less Info';
            }
            else {
                p.innerText = item.format();
                moreInfoButton.textContent = 'More Info';
            }
        });
        li.append(moreInfoButton);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            const confirmation = confirm('Are you sure you want to delete this pig?');
            if (confirmation) {
                this.container.removeChild(li);
                const pigId = item.id;
                this.removePigFromLocalStorage(pigId);
            }
        });
        li.append(deleteButton);
        this.container.append(li);
    }
    removePigFromLocalStorage(pigId) {
        // create an array of pig objects from localstorage
        let pigData = localStorage.getItem("pigData"); // pigData is a string
        let old_data = [];
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
        // remove the pig with pigId from that array
        const updatedPigs = old_data.filter((pig) => pig.id != pigId);
        localStorage.setItem('pigData', JSON.stringify(updatedPigs));
    }
    // remove all li elements from ul
    clearList() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    }
}
