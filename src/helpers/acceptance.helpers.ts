import '@wdio/sync';
import Element = WebdriverIO.Element;


export class AcceptanceHelpers {

    open(url: string) {
        browser.url(url);

        return this;
    }

    fill(selector: Element, value: string) {
        try {
            browser.waitUntil(() => selector.isDisplayed(), 5000);

            selector.setValue(value);
        } catch (e) {
            throw new Error(`I can't fill: "${value}" to the field: "${selector.selector}". \nError: ${e}`);
        }

        return this;
    }

    click(element: Element) {
        try {
            browser.waitUntil(() => element.isClickable(), 5000);

            element.click();
        } catch (e) {
            throw new Error(`I can't click on: "${element.selector}". \nError: ${e}`);
        }

        return this;
    }
}