import { CommonLib } from "../commonLib"
import { Page } from "@playwright/test"
import { expect } from "@playwright/test"

export class WInvite extends CommonLib {
    constructor(page: Page) {
        super(page)
    }
    commonLib = new CommonLib(this._page)

    async validateContributorInvitePage(): Promise<void>{
    await this._page.locator("p[data-rt-header-invite='invitebtn']").click();
    await this.commonLib.explicitWait(1000); 
    await expect(this._page).toHaveTitle("Bayone")
    await expect(this._page).toHaveURL("http://d3um3tvtrwpacy.cloudfront.net/invitelist")
    await expect(this._page.locator("p:has-text('Home / Invites')")).toContainText("Home / Invites");
    await this.commonLib.explicitWait(1000);
    for(let i=0;i<2;i++){
        await this.commonLib.waitForElementToBeVisible("button[tabindex='0']>>nth="+i)
    }
    for(let i=0;i<4;i++){
         await this.commonLib.waitForElementToBeVisible("div[aria-label='Without label']>>nth="+i)
    }
    await this.commonLib.explicitWait(1000);
    await this._page.locator("div[variant='outlined']>>nth=2").click()
    await this.commonLib.explicitWait(500);  
    await this._page.locator("button:has-text('Clear All')").click()
    await this.commonLib.explicitWait(1000);  
    await this._page.locator("button:has-text('Select All')").click()
    await this.commonLib.explicitWait(1000);  
    await this._page.locator("div[variant='outlined']>>nth=2").press("Tab")
    await this.commonLib.explicitWait(1000); 
    for(let i=3;i<6;i++){
        await this._page.locator("div[variant='outlined']>>nth="+i).click() 
        await this._page.locator("button:has-text('Clear All')").click()
        await this.commonLib.explicitWait(1000);  
        await this._page.locator("button:has-text('Select All')").click()
        await this.commonLib.explicitWait(1000);  
        await this._page.locator("div[variant='outlined']>>nth=2").press("Tab")
        await this.commonLib.explicitWait(1000);  
    }
    await this.commonLib.explicitWait(1000);  
    const search= await this._page.locator("input[aria-label='search']")
    search.fill("70150");
    await this.commonLib.explicitWait(1000); 
    await expect(this._page.locator("div[data-rowindex='0']")).toHaveCount(1)
    await this._page.locator("div[data-colindex='0']").click()
    await this.commonLib.explicitWait(1000);
    await expect(this._page).toHaveURL("http://d3um3tvtrwpacy.cloudfront.net/invitecandidateview/70150")
    await this.commonLib.waitForElementToBeVisible("p:has-text('Profile Section')")
    await this.commonLib.waitForElementToBeVisible("p:has-text('Technical Section:')")
    await this.commonLib.waitForElementToBeVisible("p:has-text('Coding Section:')")
    await this.commonLib.waitForElementToBeVisible("p:has-text('Presentation Section:')")
    for(let i=0;i<23;i++){
        if(i==1){
             continue;
     }else{
         await this.commonLib.waitForElementToBeVisible("div[class='MuiGrid-root css-rfnosa']>>nth="+i)
     }
    }
    await this._page.locator("p:has-text('View Candidate Dashboard ')")  
    await this.commonLib.explicitWait(1000)     
    await this._page.locator("button[data-rt-candidate-view-invite='sendreminder']").click()
    await this.commonLib.explicitWait(1000)
    await this._page.locator("h2:has-text('Send Reminder')")
    await this.commonLib.explicitWait(1000)
    await this._page.locator("#deactive").fill("Remeber to complete your test in 1 day")
    await this.commonLib.explicitWait(1000)
    await this._page.locator("button[data-rt-delete-cancel='cancel']").click()
    await this.commonLib.explicitWait(1000)

    }
}