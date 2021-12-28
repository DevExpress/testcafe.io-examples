/* eslint-disable no-unused-vars,constructor-super */
import { RequestHook } from 'testcafe';

class JwtBearerAuthorization extends RequestHook {
    constructor () {
        super();
    }

    onRequest (e) {
        e.requestOptions.headers['Authorization'] = 'generate token here';
    }

    onResponse (e) {
    }
}
