import AbstractTest from "../AbstractTest";
import Environment from "../../Environment";
import { Page } from "playwright";

const testAccountEmail = Environment.MySigninsAccountEmail;
const testAccountPassword = Environment.MySigninsAccountPassword;

const mySigninsUrl = "https://myaccount.microsoft.com/";
const emailInputSelector = "input[type=email][name=loginfmt]";
const emailSubmitButtonSelector = "input[type=submit][value='Next']";
const passwordInputSelector = "input[type=password][name=passwd]";
const passwordSubmitButtonSelector = "input[type=submit][value='Sign in']";
const devicesNavigationSelector = "nav[role=navigation] div[name=Devices] > a[title=Devices]";
const firstDeviceCollapsibleSelector = "main[data-automation-id=devicesList] > div > div > div[role=button]:first-of-type";
const firstDeviceExpandedDisableButtonSelector = "main[data-automation-id=devicesList] button[aria-label='Disable device']";

class MyAccountTest extends AbstractTest {
    public readonly Name =
        "is able to login to MyAccount with a valid account, view devices, and toggle a device state to see more details";
    protected readonly test = async (page: Page) => {
        await this.openMyAccountPage(page);
        await this.fillEmailInput(page);
        await this.submitEmail(page);
        await this.fillPasswordInput(page);
        await this.submitPassword(page);
        await this.clickDevicesNavigationButton(page);
        await this.clickFirstDevice(page);
        await this.clickDisableDeviceButton(page);
    };

    private openMyAccountPage = async (page: Page) => {
        await page.goto(mySigninsUrl);
        await page.waitForSelector(emailInputSelector, { timeout: 5000, state: "visible" });
        await page.waitForTimeout(1000);
        await page.screenshot({ path: `${this.ArtifactsPath}/openLoginPage.png` });
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
        await page.waitForTimeout(1000);
        await page.screenshot({ path: `${this.ArtifactsPath}/submitPassword.png` });
    };
    private clickDevicesNavigationButton = async (page: Page) => {
        await page.waitForSelector(devicesNavigationSelector);
        await page.mainFrame().click(devicesNavigationSelector);
        await page.waitForTimeout(1000);
        await page.screenshot({ path: `${this.ArtifactsPath}/clickDevicesNavigationButton.png` });
    };

    private clickFirstDevice = async (page: Page) => {
        await page.waitForSelector(firstDeviceCollapsibleSelector);
        await page.mainFrame().click(firstDeviceCollapsibleSelector);
        await page.waitForTimeout(1000);
        await page.screenshot({ path: `${this.ArtifactsPath}/expandFirstDevice.png` });
    };

    private clickDisableDeviceButton = async (page: Page) => {
        await page.waitForSelector(firstDeviceExpandedDisableButtonSelector);
        await page.mainFrame().click(firstDeviceExpandedDisableButtonSelector);
        await page.waitForTimeout(1000);
        await page.screenshot({ path: `${this.ArtifactsPath}/clickDisableDeviceButton.png` });
    };
}
export default new MyAccountTest();
