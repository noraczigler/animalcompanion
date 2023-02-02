const physicalArray = ['a fluffy', 'an enormous', 'a tiny', 'a muscular', 'a big', 'a small', 'a chunky'];
const natureArray = ['kind', 'nasty', 'cute', 'cuddling', 'rude', 'smart', 'agressive'];
const animalArray = ['snake', 'cat', 'dog', 'giraffe', 'lion', 'tiger', 'shark'];

const selectPhysical = () => {
let physical = physicalArray[Math.floor(Math.random() * physicalArray.length)]
return physical;
}

const selectNature = () => {
    let nature = natureArray[Math.floor(Math.random() * natureArray.length)]
    return nature;
}

const selectAnimal = () => {
    let animal = animalArray[Math.floor(Math.random() * animalArray.length)]
    return animal;
}

let physical = selectPhysical();
let nature = selectNature();
let animal = selectAnimal();

console.log(`Your ideal animal today would be a ${physical}, ${nature} ${animal}.`)