var expect = require('chai').expect;
var myFile = require('../code.js');
describe('code.js', function() {
  it('C.bar', function() {
    expect(myFile).to.be.a('function');
  });

  it('C.getChange', function() {
      expect(myFile).to.be.a('function');
  });

  it('foo', function() {
      expect(myFile).to.be.a('function');
  });
});