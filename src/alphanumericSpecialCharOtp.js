/**
 *  GENERATE ALPHANUMERIC SPECAIL CHAR OTP CODE
 * @param {*} length
 */
export const ALPHANUMERIC_SPECIAL_CHAR_OTP = (length, upperCase) => {
  var string =
    "@/&%$#><_|?}{]*)^-!=+([0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let OTP = "";
  var len = string.length;
  let isLength = length ? length : 4;
  for (let i = 0; i < isLength; i++) {
    OTP += string[Math.floor(Math.random() * len)];
  }
  return upperCase ? OTP.toUpperCase() : OTP;
};
