/* eslint-disable no-unused-vars,constructor-super */
import { RequestHook } from 'testcafe';

class TemplateRequestHook extends RequestHook {
    async onRequest (event) {
        // ...
    }
}

class MyRequestHook extends RequestHook {
    async onRequest (event) {
        if (event.isAjax) {
            console.log(event.requestOptions.url);
            console.log(event.requestOptions.credentials.username);

            event.requestOptions.headers['custom-header'] = 'value';
        }
    }
}
