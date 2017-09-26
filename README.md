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
})
```