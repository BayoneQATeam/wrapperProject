import test, {chromium, expect} from "@playwright/test"
import { CommonLib } from "../../pom/commonLib"
import  { Wcontributor} from "../../pom/wContributor-pom/wContributor-Home-pom"
import { WcontributorCandidate } from"../../pom/wContributor-pom/wContributor-Candidate-pom"
import{WInvite} from "../../pom/wContributor-pom/wContributor-Invite-pom"


test.describe('wrapper as contributor @contributor', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/', {waitUntil: 'networkidle'})
    })
    test('Contributor HomePage', async ({page}) => {
        const commonLib = new CommonLib(page)
        const wrcontributor = new Wcontributor(page)
        await commonLib.loginAsContributor('511458292996', 'mmqnrcqbtt') 
        await wrcontributor.validateContributorHomePage()
    }) 

     test('Contributor CandidatePage', async ({page}) => {
        const commonLib = new CommonLib(page)
        const wrcontributor1 = new WcontributorCandidate(page)
        await commonLib.loginAsContributor('511458292996', 'mmqnrcqbtt') 
        await  wrcontributor1.validateContributorColoumnPage()
    }) 
        test.only('Contributor InvitePage', async ({page}) => {
        const commonLib = new CommonLib(page)
        const wrcontributor2 = new WInvite(page)
        await commonLib.loginAsContributor('511458292996', 'mmqnrcqbtt') 
        await wrcontributor2.validateContributorInvitePage()    
    })

})
