var assert              = require('assert');
var accountNumberParser = require('../lib/accountNumberParser');
var ocrNumberFixtures   = require('./ocrNumberFixtures');

describe('accountNumberParser', function () {
  describe('#parse()', function () {
    var testCases = ['000000000', '111111111', '222222222', '333333333', '444444444', '555555555', '666666666', '777777777', '888888888', '999999999', '123456789'];
    testCases.forEach(function (testNumber) {
      it('should parse ' + testNumber + ' correctly', function() {
        var ocrAccountNumber = ocrNumberFixtures.construct(testNumber);
        var parsedAccountNumber = accountNumberParser.parse(ocrAccountNumber);
        assert.equal(testNumber, parsedAccountNumber);
      });
    });

    it('should throw an error if the account number is less than 9 numbers')

    it('should throw an error if the account number contains anything other than numbers')
  });
});
