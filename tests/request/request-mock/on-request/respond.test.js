import { ClientFunction, RequestMock, Selector } from 'testcafe';
import * as url from 'url';

const mock = RequestMock()
    .onRequestTo('https://devexpress.github.io/testcafe/example/json')
    .respond({ data: 123 }) // a JSON response
    .onRequestTo('https://devexpress.github.io/testcafe/example/html')
    .respond('<html></html>') // an HTML response
    .onRequestTo('https://devexpress.github.io/testcafe/example/empty')
    .respond(null, 204) // an empty response with a status code
    .onRequestTo('https://devexpress.github.io/testcafe/example/headers')
    .respond('<html_markup>', 200, { // a response with custom headers
        'server': 'nginx/1.10.3',
    })
    .onRequestTo('https://devexpress.github.io/testcafe/example/binary')
    .respond(Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])) // a response with binary data
    .onRequestTo(/\/custom\?.*/)
    .respond((req, res) => { // a custom response
        res.headers['x-calculated-header'] = 'calculated-value';
        res.statusCode                     = '200';

        const parsedUrl = url.parse(req.url, true);

        res.setBody('calculated body ' + parsedUrl.query['param']);
    });

fixture`RequestMock.onRequestTo.respond`
    .page`http://devexpress.github.io/testcafe/example`
    .requestHooks(mock);

test('Should mock requests', async t => {
    const jsonData    = await ClientFunction(() => fetch('https://devexpress.github.io/testcafe/example/json').then(res => res.json()))();
    const htmlStatus  = await ClientFunction(() => fetch('https://devexpress.github.io/testcafe/example/html').then(res => res.status))();
    const emptyStatus = await ClientFunction(() => fetch('https://devexpress.github.io/testcafe/example/empty').then(res => res.status))();
    const headers     = await ClientFunction(() => fetch('https://devexpress.github.io/testcafe/example/headers').then(res => {
        const headers = {};
        res.headers.forEach((value, key) => headers[key] = value);
        return headers;
    }))();
    const binaryData  = new Uint8Array(await ClientFunction(() => fetch('https://devexpress.github.io/testcafe/example/binary')
        .then(res => res.arrayBuffer()))());

    await t
        .expect(jsonData).eql({ data: 123 })
        .expect(htmlStatus).eql(200)
        .expect(emptyStatus).eql(204)
        .expect(headers).contains({ server: 'nginx/1.10.3' })
        .expect(binaryData).contains([98, 117, 102, 102, 101, 114])
        .navigateTo('https://devexpress.github.io/testcafe/example/custom?param=value')
        .expect(Selector('body').innerText).contains('calculated body value');
});
