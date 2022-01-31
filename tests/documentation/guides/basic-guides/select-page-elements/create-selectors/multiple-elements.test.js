import { Selector } from 'testcafe';

const sel = Selector('div').child();

fixture`Select page element - create multiple Selectors`
    .page('./pages/multiple-elements.html');

test('Selectors count equals 4', async (t) => {
    await t.expect(sel.count).eql(4);
});
