# Stack-OTP

Stack-OTP is an easy and powerful one-time password generator for NodeJs. Stack-Otp covers must of the use cases of one-time password generation.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/stack-otp/) or [yarn](https://yarnpkg.com/package/stack-otp) to install stack-otp.

```bash
npm install stack-otp --save
yarn add stack-otp
```

## Usage

```python
const stackOtp = require("stack-otp")

# Numeric OTP
stackOtp.numericOtp() # returns numeric OTP with default length of 4
stackOtp.numericOtp(6) # return OTP with length of 6 (length >= 1)

#Alphanumeric OTP
stackOtp.alphanumericOtp() # return alphanumeric OTP with default length of 4
stackOtp.alphanumericOtp(6, true) # true means it should be uppercase while 6 is the given length

# Numeric and Special characters
stackOtp.numericSpecialCharOtp() # return numeric and special chars OTP with default length of 4
stackOtp.numericSpecialCharOtp(6)  # return Otp with length of 6 (length >= 1)

# Alhanumeric and special char
stackOtp.alphanumericSpecialCharOtp() # for alphanumeric and special chars OTP with default length of 4
stackOtp.alphanumericSpecialCharOtp(6, true) # true means it should be uppercase while 6 is the given length

# Apha OTP
stackOtp.alphaOtp() # return alpha OTP with default length of 4
stackOtp.alphaOtp(6, true) # true means it should be uppercase while 6 is the given length

# Special Char OTP
stackOtp.specialChars() # return alpha OTP with default length of 4
stackOtp.specialChars(6) # return otp with length 6

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://github.com/gaiyadev/stack-otp/blob/main/LICENSE.txt)
