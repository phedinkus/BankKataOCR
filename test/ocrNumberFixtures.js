var assert    = require('assert');

var ocrNumbers = {
  0:   [" _ ",
        "| |",
        "|_|",
        "   "],

  1:   ["   ",
        "  |",
        "  |",
        "   "],

  2:   [" _ ",
        " _|",
        "|_ ",
        "   "],

  3:   [" _ ",
        " _|",
        " _|",
        "   "],

  4:   ["   ",
        "|_|",
        "  |",
        "   "],

  5:   [" _ ",
        "|_ ",
        " _|",
        "   "],

  6:   [" _ ",
        "|_ ",
        "|_|",
        "   "],

  7:   [" _ ",
        "  |",
        "  |",
        "   "],

  8:   [" _ ",
        "|_|",
        "|_|",
        "   "],

  9:   [" _ ",
        "|_|",
        " _|",
        "   "]
};

var rowForOcrDigit = function (number, rowIndex) {
  return ocrNumbers[number][rowIndex];
};

var rowForOcrNumber = function (number, rowIndex) {
  var row = '',
      numberString = number.toString(),
      numberLen = numberString.length;
  for (var i = 0; i < numberLen; i++) {
    row += rowForOcrDigit(numberString[i], rowIndex);
  }
  return row += '\n';
};

exports.construct = function (number) {
  var rows = [ [''], [''], [''], [''] ],
      rowsLen = rows.length;

  for (var i = 0; i < rowsLen; i++) {
    rows[i] = rowForOcrNumber(number, i);
  }

  return rows.join('');
};

describe('ocrNumberFixtures', function () {
  describe('#construct()', function () {
    it('should be able to grab one number at a time for conversion', function () {
    var accountNumber = " _  _  _ \n" +
                        "|_|| | _|\n" +
                        "|_||_| _|\n" +
                        "         \n";

      assert.equal(accountNumber, exports.construct('803'));
    })
  })
})
