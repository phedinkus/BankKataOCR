var assert      = require("assert");
var digitParser = require("../lib/digitParser");

describe('digitParser', function() {
  describe('#parse()', function () {
    it('should parse the correct number for the OCR number', function () {
      var eight =  " _ " +
                   "|_|" +
                   "|_|",
          zero =   " _ " +
                   "| |" +
                   "|_|",
          four =   "   " +
                   "|_|" +
                   "  |";
      assert.equal(8, digitParser.parse(eight));
      assert.equal(0, digitParser.parse(zero));
      assert.equal(4, digitParser.parse(four));
    });

    it('should remove newline characters from the OCR number', function () {
      var seven = " _ \n  |\n  |";
      assert.equal(7, digitParser.parse(seven));
    });
  });
});
