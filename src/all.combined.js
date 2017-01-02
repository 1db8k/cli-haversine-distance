function distance (coord1, coord2) {
  const R = 6371
  const [lat1, lon1] = dmsStrToDec(coord1)
  const [lat2, lon2] = dmsStrToDec(coord2)
  const φ1 = decDegToRadians(lat1)
  const φ2 = decDegToRadians(lat2)
  const Δφ = decDegToRadians(lat2 - lat1)
  const Δλ = decDegToRadians(lon2 - lon1)

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return Math.floor(R * c / 10) * 10
}

function decDegToRadians (decDeg) {
  return decDeg * Math.PI / 180
}

function dmsStrToDec (dmsStr) {
  const regex = /(\d{1,3})°\s(\d{1,3})′\s(\d{1,3})″\s(\w)/
  return dmsStr.split(',').map((coordStr) => {
    let match = coordStr.match(regex)
    let cardinalDir = match[4].toUpperCase()
    let absoluteDec = +match[1] + +match[2] / 60 + +match[3] / 3600
    return cardinalDir === 'S' || cardinalDir === 'W' ? -absoluteDec : absoluteDec
  })
}
distance(process.argv[2], process.argv[3])
