import { CommonLib } from "../commonLib"
import { Page } from "@playwright/test"
import { expect } from "@playwright/test"



export class wrLeadInvite extends CommonLib {
    constructor(page: Page) {
        super(page)
    }

    commonLib = new CommonLib(this._page)

    async validateLeadInvitePage() :Promise<void>{
        await this._page.locator('p[data-rt-header-invite="invitebtn"]').click()
        await expect(this._page).toHaveTitle('Bayone')
        await expect(this._page).toHaveURL('http://d3um3tvtrwpacy.cloudfront.net/invitelist')
        await expect(this._page.locator('p:has-text("Home / Invites")')).toHaveText("Home / Invites")
        for(let index=0;index<2;index++)
        {
                await expect(this._page.locator('button[tabindex] >> nth=' +index)).toBeVisible()
        }
        for(let i=0; i<6; i++)
        {
            await expect(this._page.locator('div[aria-label="Without label"] >> nth=' +i)).toBeVisible()
        }
        await this._page.locator('div[data-colindex="0"] >> nth=0').click()
        await this.explicitWait(2000)
        for(let i=0; i<23; i++)
        {
            await expect(this._page.locator('div[class="MuiGrid-root css-rfnosa"] >> nth=' +i)).toBeVisible()
        }
        if(await this._page.locator("button:has-text('Deactivate Invite')").isVisible())
        {
            await this._page.locator('button[data-rt-candidate-view-invite="deactivateinvite"]').click()
            await expect(this._page.locator('h2[id="responsive-dialog-title"]')).toHaveText("Deactivate Invite")
            await this._page.locator('input[name="deactive"]').fill("I will take this profile later")
            await this._page.locator('button[data-rt-delete-deactivate="deactivate"]').click()
            await expect(this._page.locator("span[class='invitemsg']")).toContainText("Invite has been deactivated")
            await this.explicitWait(3000)
            await expect(this._page.locator("p:has-text('Inactive')")).toHaveText("Inactive")
        }
        else{
            await this._page.locator("button:has-text('Activate Invite')").click()
            await this._page.locator('button[data-rt-div-exitsubmit="exitsubmit"]').click()
            await expect(this._page.locator("span[class='invitemsg']")).toContainText("Invite is now active")
            await this.explicitWait(3000)
            await expect(this._page.locator("p:has-text('Active')")).toHaveText("Active")
        }
        if(await this._page.locator("button:has-text('Deactivate Invite')").isVisible()) {
            await this._page.locator('button[data-rt-candidate-view-invite="sendreminder"]').click()
            await expect(this._page.locator('h2[id="responsive-dialog-title"]')).toHaveText("Send Reminder")
            const cantMessage = await this._page.locator('input[autocomplete="new-password"]')
            cantMessage.fill("Today you have Bayone Solution online test don’t miss your schedule")
            await this._page.locator('button[data-rt-delete-deactivate="deactivate"]').click()
            await expect(this._page.locator("span[class='invitemsg']")).toContainText("Reminder has been sent")
        }
    }
}