import { ClientFunction } from 'testcafe';

fixture`Fixture.clientScripts`
    .page`https://devexpress.github.io/testcafe/example/`
    .clientScripts('../../../../../utils/mock-date-get-time.js');

test('Run script from the file', async (t) => {
    const clientFunc = ClientFunction(() => {
        return new Date().getTime();
    });

    await t
        .navigateTo('https://devexpress.github.io/testcafe/example/')
        .expect(clientFunc()).eql(42);
});

fixture`Fixture.clientScripts`
    .clientScripts({
        page:    /\/testcafe\/example\//,
        content: 'Geolocation.prototype.getCurrentPosition = success => success({ latitude: 0, longitude: 0 });',
    });

test('Should mock getCurrentPosition for the Specific Pages', async (t) => {
    const getGeolocation = ClientFunction(() => new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject),
    ));

    await t
        .navigateTo('https://devexpress.github.io/testcafe/example/')
        .setNativeDialogHandler(() => true)
        .expect(getGeolocation()).eql({ latitude: 0, longitude: 0 });
});

fixture`Fixture.clientScripts`
    .page`https://devexpress.github.io/testcafe/example/`
    .clientScripts({ module: 'lodash' });

test('Inject a Module', async (t) => {
    const clientFunc = ClientFunction(() => {
        // eslint-disable-next-line no-undef
        return _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
    });

    await t
        .navigateTo('https://devexpress.github.io/testcafe/example/')
        .expect(clientFunc()).eql({ 'a': 1, 'b': 2 });
});

const mockDate = `
    Date.prototype.getTime = function () {
        return 42;
    };
`;

fixture`Fixture.clientScripts`
    .clientScripts({ content: mockDate });

test('Should mock getTime', async (t) => {
    const clientFunc = ClientFunction(() => {
        return new Date().getTime();
    });

    await t
        .navigateTo('https://devexpress.github.io/testcafe/example/')
        .expect(clientFunc()).eql(42);
});

fixture`Fixture.clientScripts`
    .page`https://devexpress.github.io/testcafe/`
    .clientScripts({
        page: /\/testcafe\/example\//,
        path: '../../../../../utils/mock-date-get-time.js',
    });

test('Provide Scripts for Specific Pages', async (t) => {
    const clientFunc = ClientFunction(() => {
        return new Date().getTime();
    });

    await t
        .expect(clientFunc()).notEql(42)
        .navigateTo('https://devexpress.github.io/testcafe/example/')
        .expect(clientFunc()).eql(42);
});
