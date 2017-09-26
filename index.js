var md5 = require('blueimp-md5');
var axios = require('axios');
var request = require('request');
var cheerio = require('cheerio');

module.exports={
    getDetail: function (phone, cb) {
        function getNumberDetail(phone, hash){
            var url = 'https://numverify.com/php_helper_scripts/phone_api.php?secret_key='+hash+"&number="+phone;
            axios.get(url)
                .then(function (response) {
                    return cb(null, response.data)
                })
                .catch(function (error) {
                    return cb(error)
                });
        }

        request('https://numverify.com', function (error, response, html) {
            if (!error && response.statusCode == 200) {
                var parseHtml = cheerio.load(html);
                var secret = parseHtml('input[name=scl_request_secret]').val();
                phone = phone.replace(/[_\W]+/g, "");
                var hash = md5(phone + secret);
                getNumberDetail(phone, hash);
            }
        });

    }
}





