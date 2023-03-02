/*
1) Створіть довільний об’єкт, який має 5 полів. 
Необхідно написати функцію showProps(obj), яка приймає даний об’єкт і виводить список його властивостей записаних в масив. 
Виведіть також масив значень властивостей об’єкта.
*/

let Human = {
    firstName: 'Petro',
    lastName: 'Petrenko',
    age: 20,
    job: 'Coder',
    experience: 2
}

function showProps(obj) {
    let props = Object.keys(obj);
    console.log(props);
    let value = props.map(prop => obj[prop]);
    console.log(value);
}
showProps(Human);
