var ocrDigits = [
                  " _ " +
                  "| |" +
                  "|_|",

                  "   " +
                  "  |" +
                  "  |",

                  " _ " +
                  " _|" +
                  "|_ ",

                  " _ " +
                  " _|" +
                  " _|",

                  "   " +
                  "|_|" +
                  "  |",

                  " _ " +
                  "|_ " +
                  " _|",

                  " _ " +
                  "|_ " +
                  "|_|",

                  " _ " +
                  "  |" +
                  "  |",

                  " _ " +
                  "|_|" +
                  "|_|",

                  " _ " +
                  "|_|" +
                  " _|"
               ];
var ocrDigitMap = {};

function buildOcrDigitMap () {
  var i = 0, len = ocrDigits.length;
  for (i; i < len; i++) {
    ocrDigitMap[ocrDigits[i]] = i;
  }
};

function sanitize (digit) {
  return digit.replace(/\n/g, '');
}

buildOcrDigitMap();

exports.parse = function (digit) {
  return ocrDigitMap[sanitize(digit)];
};
