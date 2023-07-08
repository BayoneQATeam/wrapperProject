import { Page } from "@playwright/test"

export class CommonLib {
    protected _page: Page

    constructor(page: Page) {
        this._page = page
    }

    async loginAsAdmin(username: string, password: string): Promise<void> {
        await this._page.locator('input[id="number"]').fill(username)
        await this._page.locator('input[id="password"]').fill(password)
        await this._page.locator("button[type='submit']").click()
        // Check if login is success
        await this.explicitWait(5000)
    }

    async loginAsContributor(username: string, password: string): Promise<void> {
        await this._page.locator('input[id="number"]').fill(username)
        await this._page.locator('input[id="password"]').fill(password)
        await this._page.locator("button[type='submit']").click()
        // Check if login is success
        await this.explicitWait(5000)
    }

    async loginAsLead(username: string, password: string): Promise<void> {
        await this._page.locator('input[id="number"]').fill(username)
        await this._page.locator('input[id="password"]').fill(password)
        await this._page.locator("button[type='submit']").click()
        // Check if login is success
        await this.explicitWait(5000)
    }

    async explicitWait(time: number): Promise<void> {
        await this._page.waitForTimeout(time)
    }

    async waitForElementToBeVisible(locator: string): Promise<void> {
        await Promise.all([
            this._page.waitForSelector(locator, {state: 'visible', timeout: 40000}),
            this._page.isVisible(locator)
        ])
    }
}