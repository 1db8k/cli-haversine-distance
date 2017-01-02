# cli-haversine-distance
Returns the amount of kilometers between two coordinates.

This repo was made to satisfy the user stories of the codewars.com kata 'The Captain's Distance Request' which can be found [here](https://www.codewars.com/kata/524ada2bdc2121b521000353). Intructions can be also found in this route directory under 'instructions.txt'

## Getting started
```sh
git clone https://github.com/1db8k/cli-haversine-distance.git
cd cli-haversine-distance

# coordiate format must follow '48° 12′ 30″ N, 16° 22′ 23″ E'
node src/index <enter starting coordinate here> <enter ending coordinate here>
```

## Running tests
Uses mocha and chai
```sh
npm install
npm test
```

## Understanding the math
movable-type.co.uk have an awesome guide (which is where this modules gets its algorithm from and can be found [here](http://www.movable-type.co.uk/scripts/latlong.html)

## Solution to codewars kata
can be found in the source code
