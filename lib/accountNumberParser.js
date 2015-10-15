var digitParser = require('./digitParser');

var digitDimensions = {
  width:  3,
  height: 3
};

var accountNumberLength = 9;

var parseDigitAtPosition = function (lines, position) {
  var ocrDigit    = '',
      digitOffset = position * digitDimensions.width;
  for (var i = 0; i < lines.length; i++) {
    ocrDigit = ocrDigit.concat(lines[i].slice(digitOffset, digitOffset + 3) + '\n');
  }
  return ocrDigit;
}

exports.parse = function (ocrAccountNumber) {
  var ocrDigit,
      accountNumber = '',
      lines         = ocrAccountNumber.toString().split(/\n/, digitDimensions.height);

  for (var i = 0; i < accountNumberLength; i++) {
    ocrDigit = parseDigitAtPosition(lines, i);
    accountNumber = accountNumber.concat(digitParser.parse(ocrDigit));
  }

  return accountNumber;
};
