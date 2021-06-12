/**
 *  GENERATE STRING OTP CODE
 * @param {*} length
 */
export const STRING_OTP = (length) => {
  var string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let OTP = "";
  var len = string.length;
  let isLength = length ? length : 4;
  for (let i = 0; i < isLength; i++) {
    OTP += string[Math.floor(Math.random() * len)];
  }
  return OTP;
};
