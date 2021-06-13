/**
 *  GENERATE ALPHANUMERIC OTP CODE
 * @param {*} length
 */
module.exports.ALPHANUMERIC_OTP = (length, upperCase) => {
  var string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let OTP = "";
  var len = string.length;
  let isLength = length ? length : 4;
  for (let i = 0; i < isLength; i++) {
    OTP += string[Math.floor(Math.random() * len)];
  }
  return upperCase ? OTP.toUpperCase() : OTP;
};
