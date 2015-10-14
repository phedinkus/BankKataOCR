var assert              = require('assert');
var accountNumberParser = require('../lib/accountNumberParser');
var ocrNumberFixtures   = require('./ocrNumberFixtures');

describe('accountNumberParser', function () {
  describe('#parse()', function () {
    it('should convert an OCR account number to numeric representation', function () {
      var ocrAccountNumber = ocrNumberFixtures.construct(3776);
      var parsedAccountNumber = accountNumberParser.parse(ocrAccountNumber);
      assert.equal(3776, parsedAccountNumber);
    });
  });
});
