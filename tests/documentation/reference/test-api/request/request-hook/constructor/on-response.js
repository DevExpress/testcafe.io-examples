/* eslint-disable no-unused-vars,constructor-super */
import { RequestHook } from 'testcafe';

class TemplateRequestHook extends RequestHook {
    async onResponse (event) {
        // ...
    }
}

class MyRequestHook extends RequestHook {
    async onResponse (event) {
        if (event.statusCode === 200)
            console.log(event.headers['Content-Type']);
    }
}
