import { CommonLib } from "../commonLib"
import { Page } from "@playwright/test"
import { expect } from "@playwright/test"

export class WAdmin1 extends CommonLib {
    constructor(page: Page) {
        super(page)
    }
    commonLib = new CommonLib(this._page)
    async validateAdminRecrPage(): Promise<void>{
      await this._page.locator("//p[@data-rt-header-recruiter='recruiterbtn']").click();
      await this.explicitWait(2000);
      await expect(this._page.locator("//button[@data-rt-recruiter-addnew=' addnewrecruiter']")).toBeVisible();
      await this.commonLib.explicitWait(2000);
      await expect(this._page.locator("button:has-text('Refresh List')")).toBeVisible();
      await this.explicitWait(2000);
      await expect(this._page.locator("//input[@placeholder='Search recruiter']")).toBeVisible();
      await this.explicitWait(2000);
      await expect(this._page.locator("//div[@class='MuiFormControl-root css-ipzqmi']")).toBeVisible();
      await this.explicitWait(2000);
      await expect(this._page.locator("em:has-text('Status')")).toBeVisible();
      await this.explicitWait(2000);
      await expect(this._page.locator("em:has-text('Recruiter Type')")).toBeVisible();
      await this.explicitWait(2000);
      await expect(this._page.locator("span:has-text('Row per page')")).toBeVisible();
      await this.explicitWait(2000);
      await expect(this._page.locator("//div[@class='MuiDataGrid-main css-opb0c2']")).toBeVisible();
      await this.explicitWait(2000);
      await this._page.locator("//button[@data-rt-recruiter-addnew=' addnewrecruiter']").click();
      await this.explicitWait(2000);
      await expect(this._page.locator("p:has-text('Add Recruiter') >>nth=1")).toBeVisible();
      await this.explicitWait(2000);
      await this._page.locator("//input[@id='givenName']").type("S");
      await this.explicitWait(1000);
      await this._page.locator("//input[@id='familyName']").type("Pushpa");
      await this.explicitWait(1000);
      await this._page.locator("//input[@id='email']").type("ammuammu48@gmail.com");
      await this.explicitWait(1000);
      await this._page.locator("//div[@role='button']").click();
      await this.explicitWait(1000);
      await this._page.locator("//li[@data-value='Contributor']").click();
      await this.explicitWait(1000);
      await expect(this._page.locator("button:has-text('Create Recruiter')")).toBeVisible();
      await this.explicitWait(1000);
      await this._page.locator("//button[@type='submit']").click();
      await this.explicitWait(1000);
      await expect(this._page.locator("p:has-text('Recruiter Profile')")).toBeVisible();
      await this.explicitWait(1000);
    }
}
