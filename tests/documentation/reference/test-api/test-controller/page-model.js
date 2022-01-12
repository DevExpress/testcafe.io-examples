import { Selector } from 'testcafe';

class Page {
    constructor () {
        this.loginInput    = Selector('#login_field');
        this.passwordInput = Selector('#password');
        this.submitButton  = Selector('input[type="submit"]');
    }

    async login (t) {
        await t
            .typeText(this.loginInput, 'MyLogin')
            .typeText(this.passwordInput, 'Pa$$word')
            .click(this.submitButton);
    }
}

export default new Page();