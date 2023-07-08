/*import test, {chromium , expect} from "@playwright/test"
import { CommonLib } from "../../pom/commonLib"
import {WAdmin} from "../../pom/wAdmin-pom/wAdmin_Home"
import { WAdmin1} from "../../pom/wAdmin-pom/Admin_Recr"
import { wAdmin_Roles }  from "../../pom/wAdmin-pom/wAdmin_Roles"


test.describe('wrapper as admin @admin', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/', {waitUntil: 'networkidle'})
    })

    test('Admin Login', async ({page}) => {
        const commonLib = new CommonLib(page)
        const wadmin1= new WAdmin(page)
        await commonLib.loginAsAdmin('511458292996', 'mmqnrcqbtt')
        await wadmin1.validateAdminHomePage();
    })
    test('Admin Login', async ({page}) => {
        const commonLib = new CommonLib(page)
        const Recr = new WAdmin1(page)
        await commonLib.loginAsAdmin('511458292996', 'mmqnrcqbtt')
        await Recr.validateAdminRecrPage()
     })
    test('Admin Login', async ({page}) => {
        const commonLib = new CommonLib(page) 
        const wAdmin = new wAdmin_Roles (page)
        await commonLib.loginAsAdmin('511458292996', 'mmqnrcqbtt')
        await wAdmin.validateAdminRolespage();
    })
})*/