import { CommonLib } from "../commonLib"
import { Page } from "@playwright/test"
import { expect } from "@playwright/test"



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
            for(let index=0;index<12;index++)
            {
                await expect(this._page.locator('button[tabindex] >> nth=' +index)).toBeVisible()
            }
            await this._page.locator('button[data-rt-role-addnew="addnewcandidate"]').click()
            await this.explicitWait(2000)
            await this._page.locator('#linkedInUrl').fill('https://www.linkedin.com')
            await this.explicitWait(2000)
            const firstName=await this._page.locator('#givenName').fill("MadhuraK")
            await this.explicitWait(2000)
            await this._page.locator('#familyName').fill("Naik")
            await this.explicitWait(2000)
            await this._page.locator('#email').fill("madhurak61@gmail.com")
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
            await this._page.locator('Input[aria-label="search"]').fill('30035')
            await this._page.locator('div[data-colindex="0"]').click()
            await this._page.locator('Button[data-rt-invite-add="Continue"]').click()
            await this.explicitWait(2000)
            for(let index=0;index<4;index++)
            {
                await expect(this._page.locator('p[id="no-copy"] >> nth=' +index)).toBeVisible()
            }
            for(let i=0;i<2;i++)
            {
                await expect(this._page.locator('.Mui-checked >> nth=' +i)).toBeVisible()
            }
            await expect(this._page.locator('input[aria-invalid="false"]')).toBeVisible()
            await this._page.locator('button[data-rt-invite-add="Continue"]').click()
            await this.explicitWait(2000)
            for(let i=0; i<2; i++)
            {
            await expect(this._page.locator("p:has-text('Change Selection') >> nth=" +i)).toBeVisible()
            }
            for(let i=0; i<5; i++)
            {
                await expect(this._page.locator('button[tabindex="0"] >> nth=' +i)).toBeVisible()
            }
            await expect(this._page.locator('div[role="grid"]')).toBeVisible()
            const candidateID = await this._page.locator('div[data-colindex="0"]').innerText()
            console.log(candidateID)
            await this._page.locator('div[data-colindex="0"]').click()
            await this.explicitWait(2000)
            await this._page.locator('button[type="submit"]').click()
            for(let i=0; i<3; i++)
            {
                await expect(this._page.locator("p:has-text('Change Selection') >> nth=" +i)).toBeVisible()
            }
            
            await this._page.locator('button[data-rt-invite-add="ContinuetoReview"]').click()
            await expect(this._page.locator("p:has-text('Invite Summary')")).toHaveText("Invite Summary")
            await expect(this._page.locator("p:has-text('Role Selection')")).toHaveText("Role Selection")
            await expect(this._page.locator("p:has-text('Testing Requirements')")).toHaveText("Testing Requirements")
            await expect(this._page.locator("p:has-text('Candidate Selection')")).toHaveText("Candidate Selection")
            await this._page.locator('button[data-rt-invite-add="SendinvitetoList"]').click()
            await expect(this._page.locator("p:has-text('Invite(s) sent successfully')")).toHaveText("Invite(s) sent successfully")
            for(let i=0; i<2; i++)
            {
                await expect(this._page.locator('button[tabindex="0"] >> nth=' +i)).toBeVisible()
            }

        }
    
    }
    

