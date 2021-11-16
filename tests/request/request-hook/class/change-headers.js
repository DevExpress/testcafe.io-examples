/* eslint-disable no-unused-vars */
import { RequestHook } from 'testcafe';

class HeadersHook extends RequestHook {
    constructor (requestFilterRules) {
        super(requestFilterRules);
    }

    async onRequest () {
    }

    async onResponse () {
    }

    async _onConfigureResponse (event) {
        super._onConfigureResponse(event);

        await event.setHeader('x-token', 'token-123');
        await event.removeHeader('x-frame-options');
    }
}
