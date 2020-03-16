//#region Ternary Magic
const age = 18;
age < 18 ? console.log('you are not eligible to cast a Vote') : console.log('you are eligible to cast a Vote');
//#endregion

//#region nested if..else
const age = 49;
age > 50
    ? age > 70
        ? console.log("you are getting really old")
        : console.log("you are between 50 and 70")
    : console.log('you are younger');
//#endregion

//#region Number to String
const number = 45 + ""
console.log(typeof number)
//#endregion

//#region Fill Arrays
const arr = Array(6).fill(6);
console.log(arr);
//#endregion

//#region Unique Arrays
const array = [2, 3, 4, 53, 3, 6]
const unique = Array.from(new Set(array))
console.log(unique);
//#endregion

//#region Dynamic Object
const dynamic = "Music"
const directors = {
    name: "Akon",
    [dynamic]: 'Smack that'
}
console.log(directors);
//#endregion

//#region Array to Object
const array = [2, 3, 4, 53, 3, 6];
const arrayObject = { ...array };
console.log(arrayObject);
//#endregion

//#region Object to Array
const directors = {
    name: "Akon",
    song: 'Smack That'
}
const directorKeys = Object.keys(directors)
const directorValues = Object.values(directors)
console.log(directorValues);
console.log(directorKeys)
//#endregion