/* eslint-env mocha */
const expect = require('chai').expect
const converter = require('../src/converter')

describe('Location unit conversion', function () {
  describe('Degrees minutes seconds to decimal degrees', function () {
    it('converts the basic locations', function () {
      let latLon = converter.dmsStrToDec('48° 12′ 30″ N, 16° 22′ 23″ E')
      expect(latLon[0]).to.equal(48.208333333333336)
      expect(latLon[1]).to.equal(16.373055555555556)
    })
    it('converts negative (south /west) coordinates', function () {
      let latLon = converter.dmsStrToDec('51° 43′ 29″ S, 58° 51′ 22″ W')
      expect(latLon[0]).to.equal(-51.724722222222226)
      expect(latLon[1]).to.equal(-58.85611111111111)
    })
  })
  describe('decimal degrees to radians', function () {
    it('converts the positives', function () {
      expect(converter.decDegToRadians(43.45213)).to.equal(0.7583827355046036)
      expect(converter.decDegToRadians(1.65468)).to.equal(0.02887961406689977)
    })
    it('converts negatives', function () {
      expect(converter.decDegToRadians(-91.472999937)).to.equal(-1.5965050255772155)
      expect(converter.decDegToRadians(-180)).to.equal(-3.141592653589793)
    })
  })
})
