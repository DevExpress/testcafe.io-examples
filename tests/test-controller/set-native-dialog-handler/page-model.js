import { Selector, t } from 'testcafe';

class Page {
    constructor () {
        /* ... */
        this.deleteBtn = Selector('.item__delete');
        this.name      = Selector('.item__name').textContent;
    }

    async delete () {
        const name = await this.name;

        await t
            .setNativeDialogHandler(() => name, { dependencies: { name } })
            .click(this.deleteBtn);
    }
}

export default Page;
