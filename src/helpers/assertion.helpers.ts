import '@wdio/sync';
import {expect} from 'chai';
import Element = WebdriverIO.Element;


export class AssertionHelpers {

    see(text: string, elementCss: Element = $('body')) {
        const elementWithText = $(`${elementCss.selector}*=${text}`);

        try {
            browser.waitUntil(() => elementWithText.isDisplayed(), 5000);

            expect(elementWithText.isDisplayed()).is.true;
        } catch {
            throw new Error(`I see: "${elementCss.getText()}" instead of: "${text}" on the page, using the selector: "${elementCss.selector}"!`);
        }

        return this;
    }

    seeElement(elementLocator: Element) {
        try {
            browser.waitUntil(() => elementLocator.isDisplayed(), 5000);

            expect(elementLocator.isDisplayed()).is.true;
        } catch {
            throw new Error(`I can't see: "${elementLocator.selector}" on the page!`);
        }

        return this;
    }

    seeInUrl(url: string) {
        const currentUrl = () => browser.getUrl();

        try {
            browser.waitUntil(() => currentUrl().includes(url), 5000);

            expect(currentUrl()).contains(url);
        } catch {
            throw new Error(`I see: "${currentUrl()}" instead of: "${url}" in the url!`);
        }

        return this;
    }
}