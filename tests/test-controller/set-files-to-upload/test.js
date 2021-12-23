fixture`TestController.setFilesToUpload`
    .page`./index.html`;

test('Uploading', async t => {
    await t
        .setFilesToUpload('#upload-input', [
            './uploads/1.svg',
            './uploads/2.svg',
            './uploads/3.svg',
        ])
        .click('#upload-button');
});
