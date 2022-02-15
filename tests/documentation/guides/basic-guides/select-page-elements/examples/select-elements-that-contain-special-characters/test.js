import { Selector } from 'testcafe';

fixture`Select Elements That Contain Special Characters`
    .page`../../pages/special-symbols.html`;

test('Elements are exists', async t => {
    const sel1 = await Selector('p').withText('Click&nbsp;me'); //typed representation, not supported
    const sel2 = await Selector('p').withText('Click\u00a0me'); //unicode representation, works
    const sel3 = await Selector('p').withText('Click\xa0me'); //hexadecimal representation, works
    //const sel4 = await Selector('p').withText('Click\160me') //decimal representation introduced with an octal escape sequence;
    // not supported because tests are executed in strict mode

    await t.expect(sel1.exists).ok()
        .expect(sel2.exists).ok()
        .expect(sel3.exists).ok();
});
