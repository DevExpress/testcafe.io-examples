// check-console-messages.js
import { t } from 'testcafe';

export default async function () {
    const { error, log } = await t.getBrowserConsoleMessages();

    await t.expect(error[0]).notOk();
    await t.expect(log[0]).eql('Typed name is Name');
}
