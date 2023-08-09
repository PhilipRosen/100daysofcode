//Using npm package sillyname to learn about npm modules

// var generateName = require('sillyname'); --previous CJS version

import generateName from "sillyname"
var sillyName = generateName();

console.log('My silly name is ' + sillyName)


//using another npm package called superheroes

import superheroes from "superheroes"

var superHeroName = superheroes.random()

console.log('My superhero name is ' + superHeroName)



