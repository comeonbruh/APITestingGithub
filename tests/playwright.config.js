const{test, expect} = require('@playwright/test');

const config = {
    use:{
        baseURL: 'https://api.github.com',
        extraHTTPHeaders:{
            'Accept': 'application/vnd.github.v3+json',

            'Authorization': 'token  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',
        },
    }
};
module.exports = config;