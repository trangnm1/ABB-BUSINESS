import { Page, expect } from "@playwright/test";

export class BasePage {

    constructor(protected page: Page) {}

    async goto(url: string) {
        await this.page.goto(url);
    }

    async verifyUrl(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    async waitForPageLoaded() {
        await this.page.waitForLoadState("domcontentloaded");
    }
}