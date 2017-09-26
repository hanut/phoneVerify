var phoneVerify = require('./index.js');
phoneVerify.getDetail("+919898989898", function (err, data) {
    console.log(err, data)
});
