const converter = require('./converter')

/**
 * gets distance from latitude and longditude in Km
 * @param {Number} lat1
 * @param {Number} lon1
 * @param {Number} lat2
 * @param {Number} lon2
 * @return {Number} km
**/
module.exports = function (lat1, lon1, lat2, lon2) {
  const R = 6371e3 // metres
  const [φ1, φ2, Δφ, Δλ] = [lat1, lat2, lat2 - lat1, lon2 - lon1].map(unit => converter.decDegToRadians(unit))

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c
  return d
}
