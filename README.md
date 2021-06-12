# Stack-OTP

Stack-OTP is an easy and powerful one-time password generator for NodeJs. Stack-Otp covers must of the use cases of one-time password generation.

## Installation

Use the package manager [npm](https://pip.pypa.io/en/stable/) or [yarn](https://pip.pypa.io/en/stable/) to install stack-otp.

```bash
npm install stack-otp
yarn install stack-otp
```

## Usage

```python
import { stackOtp } from "stack-otp"
#OR
const stackOtp = require("stack-otp")


# Numeric OTP
stackOtp.NUMERIC_OTP() # returns numeric OTP with default length of 4
stackOtp.NUMERIC_OTP(6) # return OTP with length of 6 (length >= 1)

#Alphanumeric OTP
stackOtp.ALPHANUMERIC_OTP() # return alphanumeric OTP with default length of 4
stackOtp.ALPHANUMERIC_OTP(6, true) # true means it should be uppercase while 6 is the given length

# Numeric and Special characters
stackOtp.NUMERIC_SPECIALCHAR_OTP() # return numeric and special chars OTP with default length of 4
stackOtp.NUMERIC_SPECIALCHAR_OTP(6)  # return Otp with length of 6 (length >= 1)

# Alhanumeric and special char
stackOtp.ALPHANUMERIC_SPECIAL_CHAR_OTP() # for alphanumeric and special chars OTP with default length of 4
stackOtp.ALPHANUMERIC_SPECIAL_CHAR_OTP(6, true) # true means it should be uppercase while 6 is the given length

# Apha OTP
stackOtp.ALPHA_OTP() # return alpha OTP with default length of 4
stackOtp.ALPHA_OTP(6, true) # true means it should be uppercase while 6 is the given length

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
