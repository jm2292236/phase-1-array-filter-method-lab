// Code your solution here

// testing data
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

// const driversObj = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];

// Looks for a name match in an array. It is case insensitive.
// Receives: 
//      - drivers (array of names)
//      - name (name to match)
// Returns
//      An array with only the names that match
function findMatching(drivers, name) {
    return drivers.filter(elem => elem.toLowerCase() === name.toLowerCase());
}

// Looks for names that match the provided characters
// Receives:
//      - drivers (array of names)
//      - startWith (characters to match at the beginning of the names)
// Returns
//      An array with only the names that match
function fuzzyMatch(drivers, startWith) {
    return drivers.filter(
        function (elem) {
            return elem.slice(0, startWith.length) === startWith;
        });
}

// Looks for a specific driver name in an array of objects. Each driver object has two properties: name and hometown
// Receives 
//      - driverObj (array of drivers object)
//      - name (name to look for a match)
// Returns
//      An array of object with only the drivers that match the name
function matchName(driverObj, name) {
    return driverObj.filter(
        function (elem) {
            return elem.name === name;
        });
}

// tests
// console.log(findMatching(drivers, 'BOBBY'));
// console.log(fuzzyMatch(drivers, 'o'));
// console.log(matchName(driversObj, 'Sammy'));
