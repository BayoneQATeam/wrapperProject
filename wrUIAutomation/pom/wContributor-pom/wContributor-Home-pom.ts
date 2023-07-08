import { CommonLib } from "../commonLib"
import { Page } from "@playwright/test"
import { expect } from "@playwright/test"

export class Wcontributor extends CommonLib {
    constructor(page: Page) {
        super(page)
    }
    commonLib = new CommonLib(this._page)

    async validateContributorHomePage(): Promise<void>{
        await this._page.locator("p[data-rt-header-home='home']").click()
        await this.commonLib.explicitWait(1000);
        await expect(this._page.locator("p:has-text('Welcome back')")).toContainText("Welcome back");
        await this._page.locator("img[alt='Recent Invites Icon']").click()
        await this.commonLib.explicitWait(1000);
        await expect(this._page.locator("div:has-text('Recent Invites') >>nth=7"), 'Recent Invites').toBeVisible();
        await this._page.locator("svg[data-testid='CloseIcon']").click()
        await this.commonLib.explicitWait(1000);
        for( let index=0;index<3;index++){
            await expect(this._page.locator("div[role='grid'] >>nth="+index)).toBeVisible();
        }
        await this._page.locator("button[data-rt-recruiterdashboard-view=' Showall']>>nth=0").click()
        await this.commonLib.explicitWait(1000);
        for(let i=17;i<=23;i+=2){
            await expect(this._page.locator(".MuiGrid-root >>nth="+i)).toBeVisible();
        }
        await expect(this._page.locator("p:has-text('Home / Invites')")).toHaveText('Home / Invites');
        await expect(this._page).toHaveURL("http://d3um3tvtrwpacy.cloudfront.net/invitelist")
    }
}