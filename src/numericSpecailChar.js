/**
 *  GENERATE STRING OTP CODE
 * @param {*} length
 */
module.exports.NUMERIC_SPECIALCHAR_OTP = (length) => {
  var string = "@/&%$#><_|?}{]*)^-!=+([0123456789";
  let OTP = "";
  var len = string.length;
  let isLength = length ? length : 4;
  for (let i = 0; i < isLength; i++) {
    OTP += string[Math.floor(Math.random() * len)];
  }
  return OTP;
};
