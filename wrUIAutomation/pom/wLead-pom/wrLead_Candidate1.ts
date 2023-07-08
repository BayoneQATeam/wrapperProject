import { CommonLib } from "../commonLib"
import { Page } from "@playwright/test"
import { expect } from "@playwright/test"
const data = JSON.parse(JSON.stringify(require("../../tests/database.json")));

export class wrLeadCandidate extends CommonLib {
    constructor(page: Page) {
        super(page)
    }

    commonLib = new CommonLib(this._page)
    async validateLeadCandidatePage() :Promise<void>{
        await this._page.locator('p[data-rt-header-candidate="candidatebtn"]').click()
        await this.explicitWait(3000)
        await expect(this._page.locator("p:has-text('Home / Candidates')"), ).toHaveText('Home / Candidates');
        await expect(this._page.locator('div[role="grid"]')).toBeVisible()
        for(let index=0;index<2;index++){
            await expect(this._page.locator('button[tabindex] >> nth=' +index)).toBeVisible()
        }
        for(let i=2; i<7; i++){
            if(await this._page.locator('div[aria-label="Without label"] >> nth=' +i).isVisible){
               await this._page.locator('div[aria-label="Without label"] >> nth=' +i).click()
               await this._page.locator("button:has-text('Select All')").click()
               await this.explicitWait(2000)
               await this._page.locator("button:has-text('Clear All')").click()
               await this.explicitWait(2000)
               await this._page.keyboard.press('Tab')
           }
        }
        await this._page.locator('button[data-rt-role-addnew="addnewcandidate"]').click()
        await this.explicitWait(2000)
        await this._page.locator('#linkedInUrl').fill(data.linkedin_ID)
        await this.explicitWait(2000)
        const firstName=await this._page.locator('#givenName').fill(data.firstName)
        await this.explicitWait(2000)
        await this._page.locator('#familyName').fill(data.lastName)
        await this.explicitWait(2000)
        await this._page.locator('#email').fill(data.Email_ID)
        await this._page.locator('button[data-rt-candidate-add="savecandidate"]').click()
        await this.explicitWait(2000)
        await this._page.locator('button[data-rt-candidate-add="savecandidate"]').click()
        await expect(this._page.locator('img[alt="profile"]')).toBeVisible()
        await expect(this._page.locator('button[type="submit"]')).toBeVisible()
        await expect(this._page.locator('button[data-rt-candidate-view="editcandidate"]')).toBeVisible()
        await expect(this._page.locator("p:has-text('Invite Candidate to a New Test')")).toBeVisible()
        await this._page.locator('button[data-rt-candidate-view="invitecandidate"]').click()
        await this.explicitWait(3000)
        await expect(this._page.locator("p:has-text('Home / Invites / Create New Invite')")).toHaveText('Home / Invites / Create New Invite')
        await expect(this._page.locator("p:has-text('Role Selection')")).toHaveText('Role Selection')
        await expect(this._page.locator('div[role="grid"]')).toBeVisible()
        await this._page.locator('div[data-colindex="0"] >> nth=0').click()
        await this._page.locator('Button[data-rt-invite-add="Continue"]').click()
        await this.explicitWait(2000)
        for(let index=0;index<4;index++){
            await expect(this._page.locator('p[id="no-copy"] >> nth=' +index)).toBeVisible()
        }
        for(let i=0;i<2;i++){
            await expect(this._page.locator('.Mui-checked >> nth=' +i)).toBeVisible()
        }
        const Calender = await this._page.locator('svg[data-testid="CalendarIcon"]')
        expect(Calender).toBeVisible()
        Calender.click()
        await expect(this._page.locator('div[tabindex="-1"]')).toBeVisible()
        await expect(this._page.locator('div[role="presentation"]')).toBeVisible()
        const calLeftArrow = await this._page.locator('svg[data-testid="ArrowLeftIcon"]')
        expect(calLeftArrow).toBeDisabled()
        const calRightArrow = await this._page.locator('svg[data-testid="ArrowRightIcon"]')
        expect(calRightArrow).toBeVisible()
        for(let i=0; i<7; i++){
            await expect(this._page.locator('span[aria-hidden="true"] >> nth=' +i)).toBeVisible()
        }
        await expect(this._page.locator('div[role="grid"]')).toBeVisible()
        await expect(this._page.locator('input[aria-invalid="false"]')).toBeVisible()
        await this._page.locator('button[data-rt-invite-add="Continue"]').click()
        await this.explicitWait(2000)
        for(let i=0; i<2; i++){
        await expect(this._page.locator("p:has-text('Change Selection') >> nth=" +i)).toBeVisible()
        }
        for(let i=0; i<5; i++){
            await expect(this._page.locator('button[tabindex="0"] >> nth=' +i)).toBeVisible()
        }
        await expect(this._page.locator('div[role="grid"]')).toBeVisible()
        const candidateID = await this._page.locator('div[data-colindex="0"]').innerText()
        console.log(candidateID)
        await this._page.locator('div[data-colindex="0"]').click()
        await this.explicitWait(2000)
        await this._page.locator('button[type="submit"]').click()
        for(let i=0; i<3; i++){
            await expect(this._page.locator("p:has-text('Change Selection') >> nth=" +i)).toBeVisible()
        }
        await this._page.locator('button[data-rt-invite-add="ContinuetoReview"]').click()
        await expect(this._page.locator("p:has-text('Invite Summary')")).toHaveText("Invite Summary")
        await expect(this._page.locator("p:has-text('Role Selection')")).toHaveText("Role Selection")
        await expect(this._page.locator("p:has-text('Testing Requirements')")).toHaveText("Testing Requirements")
        await expect(this._page.locator("p:has-text('Candidate Selection')")).toHaveText("Candidate Selection")
        await this._page.locator('button[data-rt-invite-add="SendinvitetoList"]').click()
        await expect(this._page.locator("p:has-text('Invite(s) sent successfully')")).toHaveText("Invite(s) sent successfully")
        for(let i=0; i<2; i++){
            await expect(this._page.locator('button[tabindex="0"] >> nth=' +i)).toBeVisible()
        }
    }
}

