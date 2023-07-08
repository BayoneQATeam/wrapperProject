import { CommonLib } from "../commonLib"
import { Page } from "@playwright/test"
import { expect } from "@playwright/test"

export class WAdmin extends CommonLib {
    constructor(page: Page) {
        super(page)
    }
    commonLib = new CommonLib(this._page)

        async validateAdminHomePage(): Promise<void>{
                await this._page.locator("p:has-text('Home') >>nth=0").click();
                await expect(this._page.locator("p:has-text('Home') >>nth=0")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("//p[@data-rt-header-candidate='candidatebtn']")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("//p[@data-rt-header-invite='invitebtn']")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("//p[@data-rt-header-role='rolebtn']")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("//p[@data-rt-header-recruiter='recruiterbtn']")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("p:has-text('Log Out')")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("p:has-text('Welcome back, ')")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("p:has-Text('Roles Created')")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("p:has-text('Candidates Invited')")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("p:has-text('Candidate Responses')")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("p:has-text('Target Score Achieved')")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("p:has-text('Recent Invites')")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("p:has-text('Recent Candidates')")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("p:has-text('Recent Roles')")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("div[role='grid'] >>nth=0")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("div[role='grid'] >>nth=1")).toBeVisible();
                await this.explicitWait(2000);
                await expect(this._page.locator("div[role='grid'] >>nth=2")).toBeVisible();
                await this.explicitWait(2000);
    }
}

