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

var rowForOcrNumber = function (number, rowIndex) {
  return ocrNumbers[number][rowIndex];
}
exports.construct = function (number) {
  var numberString = number.toString(),
      rows = [ [''], [''], [''], [''] ];

  for (var i = 0; i < rows.length; i++) {
    var row = '';
    for (var j = 0; j < numberString.length; j++) {
      row += rowForOcrNumber(numberString[j], i);
    }
    row += '\n';
    rows[i] = row;
  }

  return rows.join('');
};
