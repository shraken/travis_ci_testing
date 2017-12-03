var expect = require('chai').expect;
var myFile = require('../code.js');
describe('code.js', function() {
  it('C.bar', function() {
    expect(myFile).to.be.a('function');
  });
});