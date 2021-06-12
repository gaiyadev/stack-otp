/**
 *  GENERATE NUMNERIC OTP CODE
 * @param {*} length
 */
export const NUMERIC_OTP = (length) => {
  var digits = "0123456789";
  let OTP = "";
  let isLength = length ? length : 4;
  for (let i = 0; i < isLength; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};
