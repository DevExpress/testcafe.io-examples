/* eslint-disable no-unused-vars,constructor-super */
import { RequestHook } from 'testcafe';

class MyFirstHook extends RequestHook {
    constructor (requestFilterRules, responseEventOptions) {
        console.log(responseEventOptions.includeHeaders); // false
        console.log(responseEventOptions.includeBody); // false
    }
}

class MySecondHook extends RequestHook {
    constructor (requestFilterRules, responseEventOptions) {
        super(requestFilterRules, responseEventOptions);
    }
}
