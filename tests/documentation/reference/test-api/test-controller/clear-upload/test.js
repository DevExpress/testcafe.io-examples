import { Selector } from 'testcafe';

const uploadBtn = Selector('#upload-button');

fixture`TestController.clearUpload`
    .page`./index.html`;

test('Trying to upload with no files specified', async t => {
    await t
        .setFilesToUpload('#upload-input', [
            './uploads/1.svg',
            './uploads/2.svg',
            './uploads/3.svg',
        ])
        .clearUpload('#upload-input')
        .expect(uploadBtn.visible).notOk();
});
