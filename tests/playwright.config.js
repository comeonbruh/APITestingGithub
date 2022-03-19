const{test, expect} = require('@playwright/test');
const{test, expect} = require('@playwright');

const config = {
    use:{
        baseURL: 'https://api.github.com',
        extraHTTPHeaders:{
            'Accept': 'application/vnd.github.v3+json',

            'Authorization': `token ${process.env.API_TOKEN}`,
        },
    }
};
module.exports = config;