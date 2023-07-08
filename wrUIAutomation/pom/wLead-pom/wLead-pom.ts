import { CommonLib } from "../commonLib"
import { Page } from "@playwright/test"
import { expect } from "@playwright/test"



export class wrLead extends CommonLib {
    constructor(page: Page) {
        super(page)
    }

    commonLib = new CommonLib(this._page)

    async validateLeadHomePage() :Promise<void>{
        await this._page.locator('p[data-rt-header-home="home"]').click()
        await expect(this._page.locator("p:has-text('Welcome back')")).toContainText("Welcome back")
        for(let index=15;index<23;index+=2)
        {
        await expect(this._page.locator('.MuiGrid-root >> nth=' +index)).toBeVisible()
        }
        await this._page.locator('img[alt="Recent Invites Icon"]').click()
        await this.explicitWait(2000)
        await expect(this._page.locator("div:has-text('Recent Invites') >> nth=7"), 'Recent Invites should visible').toBeVisible()
        await this._page.locator('svg[data-testid="CloseIcon"]').click()
        await this.explicitWait(1000)
        await this._page.locator('img[alt="Recent Candidates Icon"]').click()
        await this.explicitWait(1000)
        await expect(this._page.locator("p:has-text('this is the recent Candidates data')")).toBeVisible()
        await this._page.locator('svg[data-testid="CloseIcon"]').click()
        await this.explicitWait(2000)
        await this._page.locator('img[alt="Recent Roles Icon"]').click()
        await this.explicitWait(1000)
        await expect(this._page.locator('p:has-text("this is the recent Roles data")')).toBeVisible()
        await this._page.locator('svg[data-testid="CloseIcon"]').click()
        await this.explicitWait(2000)
        for(let index=0;index<3;index++)
        {
        await expect(this._page.locator('div[role="grid"] >> nth=' +index)).toBeVisible()
        }
        await this._page.locator('button[data-rt-recruiterdashboard-view=" Showall"]  >> nth=0').click()
        await expect(this._page.locator("p:has-text('Home / Invites')")).toHaveText('Home / Invites')
        await this.explicitWait(3000)
        
    }
}