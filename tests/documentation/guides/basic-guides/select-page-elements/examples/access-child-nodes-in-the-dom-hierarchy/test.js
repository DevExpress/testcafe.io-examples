import { Selector } from 'testcafe';

fixture`Access Child Nodes in the DOM Hierarchy`
    .page`../../pages/adjacent-elements.html`;

const body              = Selector('body');
const firstChildElement = body.child(0); // <p>
const firstChildNode    = body.find((node, index) => { // text node
    return index === 0;
});

test('Check the text content', async t => {
    await t
        .expect(firstChildElement.textContent).eql('My first paragraph.')
        .expect(firstChildNode.textContent).eql('\n    This is my tested page. ');
});
