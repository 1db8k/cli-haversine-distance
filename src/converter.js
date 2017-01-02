/**
 * Converts degrees minutes seconds to decimal degrees
 * @param {String} dmsStr
 * @return {Array} longditudeLatitude
**/
exports.dmsStrToDec = function (dmsStr) {
  const regex = /(\d{1,3})°\s(\d{1,3})′\s(\d{1,3})″\s(\w)/
  return dmsStr.split(',').map((coordStr) => {
    let match = coordStr.match(regex)
    let cardinalDir = match[4].toUpperCase()
    let absoluteDec = +match[1] + +match[2] / 60 + +match[3] / 3600
    // absoluteDec = parseFloat(absoluteDec.toFixed(5))
    return cardinalDir === 'S' || cardinalDir === 'W' ? -absoluteDec : absoluteDec
  })
}

/**
 * Converts decimal degrees to radians
 * @param {Number} decDeg
 * @return {Number} radians
**/
exports.decDegToRadians = function (decDeg) {
  return decDeg * Math.PI / 180
}
