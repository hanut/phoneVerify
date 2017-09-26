# Phone Verify
Library to verify the phone number. It currently uses numverify api to validate the number.

## Installation
```sh
$ npm i phoneverify --save
```

### Example
```
var phoneverify = require('phoneverify')
var phone = "+919898989898"
phoneverify.getDetail(phone, funcition(err, result){
    if(err){
        console.log(err)
    }
    console.log(result)

    //  result
    //  { valid: true,
    //    number: '919898989898',
    //    local_format: '09898989898',
    //    international_format: '+919898989898',
    //    country_prefix: '+91',
    //    country_code: 'IN',
    //    country_name: 'India (Republic of)',
    //    location: 'Gujarat',
    //    carrier: 'Bharti Airtel Ltd',
    //    line_type: 'mobile' }
})
```