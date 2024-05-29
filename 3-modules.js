// MODULES

// CommonJS - every file is a module (be default)
// Modules  - encapsulated code (only share minimum)

const name = require('./4-names')
const sayHello = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

// console.log(names)

// sayHello('susan')
// sayHello(name.tom)
// sayHello(name.pete)