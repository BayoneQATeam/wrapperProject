import { CommonLib } from "../commonLib"
import { Page } from "@playwright/test"
import { expect } from "@playwright/test"

export class WcontributorCandidate extends CommonLib {
    constructor(page: Page) {
        super(page)
    }
    commonLib = new CommonLib(this._page)

        async validateContributorColoumnPage():Promise<void>{
            await this._page.locator("p[data-rt-header-candidate='candidatebtn']").click()
            await this.commonLib.explicitWait(1000);
            await expect(this._page.locator("p:has-text('Home / Candidates')")).toHaveText('Home / Candidates');
            for(let i=2;i<7;i++){
                await expect(this._page.locator("div[aria-haspopup='listbox']>>nth="+i)).toBeVisible();
            }
            const addCandidate=await this._page.locator("button[data-rt-role-addnew='addnewcandidate']")
            addCandidate.click()
            await this.commonLib.explicitWait(1000);
            await expect(this._page.locator(".MuiGrid-root >>nth=21")).toBeVisible();
            await this.commonLib.explicitWait(1000);
            await this._page.locator("#givenName").fill("Salinee")
            await this.commonLib.explicitWait(3000)
            await this._page.locator("#familyName").fill("Kumari")
            await this.commonLib.explicitWait(3000)
            await this._page.locator("#email").fill("nayaksalu#37@gmail.com")
            await this.commonLib.explicitWait(3000)
            const saveCandidate=await this._page.locator("button[data-rt-candidate-add='savecandidate']") 
            for(let i=0;i<2;i++){
                saveCandidate.click()
                await this.commonLib.explicitWait(3000)
            }
            await this.commonLib.explicitWait(3000)
            await expect(this._page.locator("p:has-text('Candidates /')")).toContainText('Candidates /')
            await expect(this._page.locator("img[alt='profile']")).toBeVisible();
            await this._page.locator("button[data-rt-candidate-view='invitecandidate']").click()
            await this._page.locator("input[aria-label='search']").fill("30035")
            await this._page.locator("div[data-colindex]>>nth=0").click()
            await this._page.locator("button[data-rt-invite-add='Continue']").click()
            for(let i=10;i<25;i+=2){
                await expect(this._page.locator(".MuiTypography-root>>nth="+i)).toBeVisible()
            }
            for(let index=0;index<4;index++){
                await expect(this._page.locator("div[data-rt-role-option]>>nth="+index)).toBeVisible()
            }
            await this.commonLib.explicitWait(3000)
            const calendericon=await this._page.locator("svg[data-testid='CalendarIcon']")
            calendericon.click()
            await this.commonLib.explicitWait(3000)
            for(let i=0;i<2;i++){
                await expect (this._page.locator("div[class='css-vb6e92']>>nth="+i)).toBeVisible()
            }
            const submit = await this._page.locator("button[type='submit']")
            submit.click()
            await this.commonLib.explicitWait(3000)
            for( let i=0;i<2;i++){
                await expect (this._page.locator("p:has-text('Change Selection')>>nth="+i)).toBeVisible();
            }
            for(let i=0;i<5;i++){
                await expect (this._page.locator("button[tabindex='0']>>nth="+i)).toBeVisible();
            }
            await this.commonLib.explicitWait(3000)
            const CandidateID= await this._page.locator("div[data-colindex='0']").innerText();
            console.log(CandidateID);
            await this.commonLib.explicitWait(3000)
            await this._page.locator("div[data-colindex='0']").click();
            await this.commonLib.explicitWait(3000)
            await this._page.locator("button[data-rt-invite-add='Continue']").click();
            await this.commonLib.explicitWait(3000)
            for( let i=0;i<3;i++){
                await expect(this._page.locator("p:has-text('Change Selection')>>nth="+i)).toBeVisible();
            }
            await this.commonLib.explicitWait(3000)
            const continuetoReview= await this._page.locator("button[tabindex='0']>>nth=1")
            continuetoReview.click();
            await this.commonLib.explicitWait(3000)
            await expect(this._page.locator("p:has-text('Invite Summary')")).toHaveText("Invite Summary");
            await expect(this._page.locator("p:has-text('Role Selection')")).toHaveText("Role Selection");
            await expect(this._page.locator("p:has-text('Testing Requirements')")).toHaveText("Testing Requirements");
            await this.commonLib.explicitWait(3000)
            const sendinvite=await this._page.locator("button[data-rt-invite-add='SendinvitetoList']")
            sendinvite.click()
            await this.commonLib.explicitWait(3000)
            await expect(this._page.locator("p:has-text('Invite(s) sent successfully')")).toHaveText("Invite(s) sent successfully")
            for(let i=0;i<2;i++){
                await expect(this._page.locator("button[tabindex='0']>>nth="+i)).toBeVisible();
            }  
        }    
}