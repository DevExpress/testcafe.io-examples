/* eslint-disable no-unused-vars,constructor-super */
import { RequestHook } from 'testcafe';

class MyFirstHook extends RequestHook {
    constructor (requestFilterRules, responseEventOptions) {
        console.log(requestFilterRules[0]); // https://example.com
        console.log(requestFilterRules[1]); // /auth.mycorp.com/
    }
}

class MySecondHook extends RequestHook {
    constructor (requestFilterRules, responseEventOptions) {
        super(requestFilterRules, responseEventOptions);
    }
}
