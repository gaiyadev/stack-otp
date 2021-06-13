const NUMERIC_OTP = require("./src/numericOtp.js");
const ALPHANUMERIC_OTP = require("./src/alphanumericOtp.js");
const NUMERIC_SPECIALCHAR_OTP = require("./src/numericSpecailChar.js");
const ALPHANUMERIC_SPECIAL_CHAR_OTP = require("./src/alphanumericSpecialCharOtp.js");
const ALPHA_OTP = require("./src/alphaOtp.js");

// EXPORTING
module.exports.numericOtp = NUMERIC_OTP;
module.exports.alphanumericOtp = ALPHANUMERIC_OTP;
module.exports.numericSpecialCharOtp = NUMERIC_SPECIALCHAR_OTP;
module.exports.alphanumericSpecialCharOtp = ALPHANUMERIC_SPECIAL_CHAR_OTP;
module.exports.alphaOtp = ALPHA_OTP;
