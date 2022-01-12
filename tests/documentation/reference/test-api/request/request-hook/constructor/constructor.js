/* eslint-disable no-unused-vars,constructor-super */
import { RequestHook } from 'testcafe';

class TemplateRequestHook extends RequestHook {
    constructor (requestFilterRules, responseEventOptions) {
        /* ... */
    }
}

class MyRequestHook extends RequestHook {
    constructor (requestFilterRules, responseEventOptions) {
        super(requestFilterRules, responseEventOptions);
    }
}
