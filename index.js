import { NUMERIC_OTP } from "./src/numericOtp.js";
import { ALPHANUMERIC_OTP } from "./src/alphanumericOtp.js";
import { NUMERIC_SPECIALCHAR_OTP } from "./src/numericSpecailChar.js";
import { ALPHANUMERIC_SPECIAL_CHAR_OTP } from "./src/alphanumericSpecialCharOtp.js";
import { ALPHA_OTP } from "./src/alphaOtp.js";

// EXPORTING
export const stackOtp = {
  NUMERIC_OTP,
  ALPHANUMERIC_OTP,
  NUMERIC_SPECIALCHAR_OTP,
  ALPHANUMERIC_SPECIAL_CHAR_OTP,
  ALPHA_OTP,
};
console.log(stackOtp.NUMERIC_SPECIALCHAR_OTP(6));
