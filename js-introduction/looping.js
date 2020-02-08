// console.log('looping');

let names = ['Harry', 'Ron', 'Hermoine', 'Dumbledore', 'Hagrid', 'Dobby'];

// for
// initialization, condition for termination, increment/decrement
// for (let i = 0; i < names.length; i++) {
//   console.log(`Welcome to Real world - `, names[i]);
// }

// while
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// foreach

// names.forEach((name, i) => console.log('Good morning ', i, name));

// map, reduce, filter

let flavors = [
  { id: '1001', type: 'Regular' },
  { id: '1002', type: 'Chocolate' },
  { id: '1003', type: 'Blueberry' },
  { id: '1004', type: "Devil's Food" }
];

// for ... of
// for (const flavor of flavors) {
//   console.log('Yummy flavor : ', flavor.type);
// }

let cuisines = [
  'Indian',
  'Thai',
  'Chinese',
  'Mexican',
  'Mediterranean',
  'American'
];

// map
let newCuisines = cuisines.map(cuisine => cuisine + ' amazing');
//console.log(newCuisines);

let plots = [
  {
    firstname: 'Harry',
    lastname: 'Potter',
    dob: '31-jul-1980',
    house: 'Gryffindor',
    gender: 'male'
  },
  {
    firstname: 'Ron',
    lastname: 'Weasley',
    dob: '01-mar-1980',
    house: 'Gryffindor',
    gender: 'male'
  },
  {
    firstname: 'Hermoine',
    lastname: 'Granger',
    dob: '19-sep-1979',
    house: 'Gryffindor',
    gender: 'female'
  },
  {
    firstname: 'Ginny',
    lastname: 'Weasley',
    dob: '11-aug-1981',
    house: 'Gryffindor',
    gender: 'female'
  },
  {
    firstname: 'Luna',
    lastname: 'Lovegood',
    dob: '13-feb-1981',
    house: 'Ravenclaw',
    gender: 'female'
  },
  {
    firstname: 'Draco',
    lastname: 'Malfoy',
    dob: '5-jun-1980',
    house: 'slytherin',
    gender: 'male'
  }
];

let filteredPlots = plots.filter(plot => plot.house === 'Gryffindor');

// console.log(filteredPlots);

// let fullnames = plots.map(plot => `${plot.firstname} ${plot.lastname}`);
// console.log(fullnames);

// let donutSample = {
//   id: '0001',
//   type: 'donut',
//   name: 'Cake',
//   ppu: 0.55,
//   batters: {
//     batter: [
//       { id: '1001', type: 'Regular' },
//       { id: '1002', type: 'Chocolate' },
//       { id: '1003', type: 'Blueberry' },
//       { id: '1004', type: "Devil's Food" }
//     ]
//   },
//   topping: [
//     { id: '5001', type: 'None' },
//     { id: '5002', type: 'Glazed' },
//     { id: '5005', type: 'Sugar' },
//     { id: '5007', type: 'Powdered Sugar' },
//     { id: '5006', type: 'Chocolate with Sprinkles' },
//     { id: '5003', type: 'Chocolate' },
//     { id: '5004', type: 'Maple' }
//   ]
// };
