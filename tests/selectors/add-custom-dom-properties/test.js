import { Selector } from 'testcafe';

fixture`Selector.addCustomDOMProperties`
    .page`https://devexpress.github.io/testcafe/example/`;

test( 'Check Label HTML', async t => {
    const label = Selector( 'label' ).addCustomDOMProperties( {
        innerHTML: el => el.innerHTML,
    } );

    await t.expect( label.innerHTML ).contains( 'input type="checkbox" name="remote"' );
} );
