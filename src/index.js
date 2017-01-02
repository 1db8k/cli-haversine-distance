const distance = require('./distance')
const converter = require('./converter')
const [coord1, coord2] = [process.argv[2], process.argv[3]]
// let exampleArguments = ['48° 12′ 30″ N, 16° 22′ 23″ E', '58° 18′ 0″ N, 134° 25′ 0″ W']

console.log(distance(...converter.dmsStrToDec(coord1), ...converter.dmsStrToDec(coord2)))
