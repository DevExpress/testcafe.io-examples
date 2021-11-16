/* eslint-disable no-unused-vars */
import { RequestHook } from 'testcafe';

class MyHook extends RequestHook {
    constructor (requestFilterRules, responseEventOptions) {
        super(requestFilterRules, responseEventOptions);
    }

    async onRequest (event) {
        throw new Error('Not implemented');
    }
}
