import { Selector } from 'testcafe';

fixture`Selector.addCustomDOMProperties propagation`
    .page`https://devexpress.github.io/testcafe/example/`;

test( 'Propagate custom properties', async t => {
    const div = Selector( 'div' ).addCustomDOMProperties( {
        innerHTML: el => el.innerHTML,
    } );

    await t
        .expect( div.innerHTML ).contains( '<header>' )
        .expect( div.nth( 2 ).innerHTML ).contains( '<fieldset>' )
        .expect( div.withText( 'Submit' ).innerHTML ).contains( '<button' );
} );
