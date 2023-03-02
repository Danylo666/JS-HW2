/*
"2) Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
Наприклад для об’єкта
let mentor = { 
            course: ""JS fundamental"", 
            duration: 3,
            direction: ""web-development"" 
        };
propsCount(mentor);  // 3
"
*/

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

function propsCount(obj) {
    console.log(Object.keys(obj).length);
}
propsCount(mentor)