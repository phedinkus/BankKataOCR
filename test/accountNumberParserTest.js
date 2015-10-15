var assert              = require('assert');
var accountNumberParser = require('../lib/accountNumberParser');
var ocrNumberFixtures   = require('./ocrNumberFixtures');

describe('accountNumberParser', function () {
  describe('#parse()', function () {
    it('should convert an OCR account number to numeric representation', function () {
      var ocrAccountNumber = ocrNumberFixtures.construct('371645923');
      var parsedAccountNumber = accountNumberParser.parse(ocrAccountNumber);
      assert.equal('371645923', parsedAccountNumber);
    });

    it('should throw an error if the account number is less than 9 numbers')

    it('should throw an error if the account number contains anything other than numbers')
  });
});
