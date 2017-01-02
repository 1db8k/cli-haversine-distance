/* eslint-env mocha */
const expect = require('chai').expect
const distance = require('../src/distance')

describe('Distance', function () {
  it('gets distance from latitude and longditude in Km', function () {
    expect(distance(5, 4, 3, 2)).to.equal(314115.80854053533)
  })
})
