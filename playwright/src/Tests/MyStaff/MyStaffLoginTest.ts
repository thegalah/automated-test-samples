import AbstractTest from "../AbstractTest";
import Constants from "../../Constants";
import Environment from "../../Environment";
import { Page } from "playwright";

const testAccountEmail = Environment.MySigninsAccountEmail;
const testAccountPassword = Environment.MySigninsAccountPassword;

const mySigninsUrl = "https://mystaff.microsoft.com/";
const emailInputSelector = "input[type=email][name=loginfmt]";
const emailSubmitButtonSelector = "input[type=submit][value='Next']";
const passwordInputSelector = "input[type=password][name=passwd]";
const passwordSubmitButtonSelector = "input[type=submit][value='Sign in']";

class MyStaffLoginTest extends AbstractTest {
    public readonly Name = "is able to login to MyStaff with a valid account";
    protected readonly test = async (page: Page) => {
        await this.openMyStaffPage(page);
        await this.fillEmailInput(page);
        await this.submitEmail(page);
        await this.fillPasswordInput(page);
        await this.submitPassword(page);
    };

    private openMyStaffPage = async (page: Page) => {
        await page.goto(mySigninsUrl);
        await page.waitForSelector(emailInputSelector, { timeout: 5000, state: "visible" });
        await page.waitForTimeout(1000);
        await page.screenshot({ path: `${this.ArtifactsPath}/openMystaffPage.png` });
    };

    private fillEmailInput = async (page: Page) => {
        await page.mainFrame().fill(emailInputSelector, testAccountEmail);
        await page.screenshot({ path: `${this.ArtifactsPath}/fillEmailInput.png` });
    };

    private submitEmail = async (page: Page) => {
        await page.mainFrame().click(emailSubmitButtonSelector);
        await page.waitForTimeout(1000);
        await page.screenshot({ path: `${this.ArtifactsPath}/submitEmail.png` });
    };

    private fillPasswordInput = async (page: Page) => {
        await page.waitForSelector(passwordInputSelector, { timeout: 5000, state: "visible" });
        await page.mainFrame().fill(passwordInputSelector, testAccountPassword);
        await page.screenshot({ path: `${this.ArtifactsPath}/fillPasswordInput.png` });
    };

    private submitPassword = async (page: Page) => {
        await page.mainFrame().click(passwordSubmitButtonSelector);
        await page.waitForTimeout(5000);
        await page.screenshot({ path: `${this.ArtifactsPath}/submitPassword.png` });
    };
}
export default new MyStaffLoginTest();
