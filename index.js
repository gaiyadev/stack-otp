const NUMERIC_OTP = require("./src/numericOtp.js");
const ALPHANUMERIC_OTP = require("./src/alphanumericOtp.js");
const NUMERIC_SPECIALCHAR_OTP = require("./src/numericSpecailChar.js");
const ALPHANUMERIC_SPECIAL_CHAR_OTP = require("./src/alphanumericSpecialCharOtp.js");
const ALPHA_OTP = require("./src/alphaOtp.js");

// EXPORTING
module.exports.stackOtp = {
  NUMERIC_OTP,
  ALPHANUMERIC_OTP,
  NUMERIC_SPECIALCHAR_OTP,
  ALPHANUMERIC_SPECIAL_CHAR_OTP,
  ALPHA_OTP,
};
