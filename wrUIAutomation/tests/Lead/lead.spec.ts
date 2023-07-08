import test, {chromium, expect} from "@playwright/test"
import { CommonLib } from "../../pom/commonLib"
import { wrLead } from "../../pom/wLead-pom/wLead-pom"
import { wrLeadCandidate } from "../../pom/wLead-pom/wrLead_Candidate1"
import { wrLeadInvite } from "../../pom/wLead-pom/wLead-Invite"
import { wrLeadRole } from "../../pom/wLead-pom/wrLead_Role1"
const data = JSON.parse(JSON.stringify(require("../../tests/database.json")));

test.describe('wrapper as lead @lead', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/', {waitUntil: 'networkidle'})
    })

    test('wrLead Home page', async ({page}) => {
        const commonLib = new CommonLib(page)
        const wrlead = new wrLead(page)
        await commonLib.loginAsLead(data.userName, data.password)
        await wrlead.validateLeadHomePage()
    })

    test('wrLead Candidate page', async ({page}) => {
        const commonLib = new CommonLib(page)
        const wrlead1 = new wrLeadCandidate(page)
        await commonLib.loginAsLead(data.userName, data.password)
        await wrlead1.validateLeadCandidatePage()
    })

    test('Lead Invite Page', async ({page}) => {
        const commonLib = new CommonLib(page)
        const wrlead2 = new wrLeadInvite(page)
        await commonLib.loginAsLead(data.userName, data.password)
        await wrlead2.validateLeadInvitePage()
    })

    test('Lead Role Page', async ({page}) => {
        const commonLib = new CommonLib(page)
        const wrlead3 = new wrLeadRole(page)
        await commonLib.loginAsLead(data.userName, data.password)
        await wrlead3.validateLeadRolePage()
    })
    
})