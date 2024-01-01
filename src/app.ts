import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
import { Invoice } from "./classes/invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, 'end');
});

//ENUMS
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON};

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
};

const docOne: Resource<object> = {
    uid: 1, 
    resourceType: ResourceType.BOOK, 
    data: {title: 'name of the wind'}
};

const docTwo: Resource<object> = {
    uid: 10, 
    resourceType: ResourceType.PERSON, 
    data: {title: 'yoshi'}
};

console.log(docOne, docTwo);
