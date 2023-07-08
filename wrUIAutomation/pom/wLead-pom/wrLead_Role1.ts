import { CommonLib } from "../commonLib"
import { Page } from "@playwright/test"
import { expect } from "@playwright/test"

export class wrLeadRole extends CommonLib {
    constructor(page: Page) {
        super(page)
    }

    commonLib = new CommonLib(this._page)

    async validateLeadRolePage() :Promise<void>{
       const grid = 'div[role="grid"]'
       await this._page.locator('p[data-rt-header-role="rolebtn"]').click()
       for(let i=0; i<2; i++){
       await expect(this._page.locator('button[tabindex="0"] >> nth=' +i)).toBeVisible() 
       }
       await this._page.locator("p:has-text('All')").click()
       await expect(this._page.locator(grid)).toBeVisible()
       const searchBox = 'input[aria-label="search"]'
       await expect(this._page.locator(searchBox)).toBeVisible()
       for(let i=0; i<6; i++){
        await expect(this._page.locator('div[aria-label="Without label"] >> nth=' +i)).toBeVisible()
       }
       await this._page.locator('button[data-rt-role-addnew=" addnewrole"]').click()
       const existingRole = "p:has-text('Use Existing Role Type')"
       const jobDescription = "p:has-text('Paste a Job Description')"
       await expect(this._page.locator("p:has-text('Create Role')")).toBeVisible()
       await expect(this._page.locator(existingRole)).toContainText('Use Existing Role Type')
       await expect(this._page.locator(jobDescription)).toContainText('Paste a Job Description')
       await expect(this._page.locator('button[data-rt-create="cancel"]')).toBeVisible()
       await this._page.locator(existingRole).click()
       await expect(this._page.locator("p:has-text('New Role - Details')")).toHaveText('New Role - Details')
       for(let i=0; i<5; i++){
          await this._page.locator('div[aria-label="Without label"] >> nth=' +i).click()
          await this._page.locator('li[role="option"] >> nth=1').click()
          await this.explicitWait(1000)
       }
       const Continue = 'button[data-rt-role-add="Continue"]'
       if(await this._page.locator(Continue).isVisible()){
         await this._page.locator(Continue).click()
       }
       await expect(this._page.locator("p:has-text('Edit Details')")).toBeVisible()
       await this._page.locator("p:has-text('Git')").click()
       await this._page.locator("p:has-text('Docker & Kubernetes')").click()
       await this._page.locator(Continue).click()
       let totalWeightage = await this._page.locator("p:has-text('100') >> nth=1").innerText()
       var arr=[]
       for(let i=0; i<5; i++){
          var skillWeightage = await this._page.locator('div[aria-label="Without label"] >> nth=' +i).innerText()
          arr[i]=skillWeightage;
       }
       var arr1=[]
       var lenArray = arr.length;
       for(let i=0; i<lenArray; i++){
        arr1.push(parseInt(arr[i]))
       }
        var addSkill=0
        for(let i=0; i<lenArray; i++){
        addSkill += arr1[i]
       }
       if(addSkill==100){
        if(await this._page.locator(Continue).isEnabled()){
            await this._page.locator(Continue).click()
            await this.explicitWait(1000)
         }
       }
       await expect(this._page.locator("p:has-text('Hiring Role Information')")).toBeVisible()
       await expect(this._page.locator("p:has-text('Required Skills')")).toBeVisible()
       await expect(this._page.locator("p:has-text('Skills Weightage')")).toBeVisible()
       for(let i=0; i<3; i++){
       await expect(this._page.locator("p:has-text('Edit Details') >> nth=" +i)).toBeVisible()
       }
       await expect(this._page.locator("p:has-text('Testing Sections')")).toBeVisible()
       await expect(this._page.locator('input[aria-label="ant design"]')).toBeChecked()
       for(let i=0; i<4; i++){
        await this._page.locator("div[data-rt-role-option] >> nth=" +i).click()
       }
       if(await this._page.locator(Continue).isEnabled()){
        await this._page.locator(Continue).click()
       }
       await expect(this._page.locator("p:has-text('Override Permitted')")).toBeVisible()
       await expect(this._page.locator("p:has-text('Yes')")).toHaveText("Yes")
       const editButton = "p:has-text('Edit Details') >> nth=3"
       if(await this._page.locator(editButton).isEditable){
            await this._page.locator(editButton).click()
            await this.explicitWait(2000)
            await this._page.locator("div[data-rt-role-option] >> nth=3").click()
            await this._page.locator(Continue).click()
       }
       await expect(this._page.locator("p:has-text('Name & Notes')")).toContainText('Name')
       await expect(this._page.locator("p:has-text('Enter Role Name')")).toBeVisible()
       await this.explicitWait(2000)
       await this._page.locator("#rolename").fill("Developer")
       const Review = 'button[data-rt-role-add="ContinuetoReview"]'
       if(await this._page.locator(Review).isEnabled){
        await this._page.locator(Review).click()
       }
       await expect(this._page.locator("p:has-text('Role Summary')")).toHaveText("Role Summary")
       await expect(this._page.locator("p:has-text('Testing Requirements')")).toBeVisible()
       for(let i=0; i<2; i++){
          await expect(this._page.locator('button[type="submit"] >> nth=' +i)).toBeVisible()
       }
       await this._page.locator('button[type="submit"] >> nth=1').click()
       await this.explicitWait(3000)
       const roleDeactivate = 'button[data-rt-role-view="deactivate"]' 
       if(await this._page.locator(roleDeactivate).isVisible){
         await this._page.locator(roleDeactivate).click()
         await expect(this._page.locator('#responsive-dialog-title')).toBeVisible()
         await this._page.locator('#deactive').fill("I will activate later");
         await this.explicitWait(2000)
         await this._page.locator('button[data-rt-delete-deactivate="deactivate"]').click()
         await expect(this._page.locator('span[class="invitemsg"]')).toHaveText("Role has been deactivated")
         await this.explicitWait(3000)
         await expect(this._page.locator("p:has-text('inactive')")).toContainText("inactive")
       }
       const roleAvtive  = 'button[data-rt-role-view="activate"]'
       if(await this._page.locator(roleAvtive).isVisible){
        await this._page.locator(roleAvtive).click()
        await this._page.locator('button[data-rt-div-exitsubmit="exitsubmit"]').click()
        await expect(this._page.locator('span[class="invitemsg"]')).toHaveText("Role is now active")
        await this.explicitWait(3000)
        await expect(this._page.locator("p:has-text('active')")).toContainText("active")
        await this._page.on("dialog", async (alert) => {
         const text = alert.message();
         console.log(text);;
         await alert.dismiss();
      })
       }
    }
}