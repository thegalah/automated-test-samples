import Constants from "../Constants";
import { chromium, Page } from "playwright";
import { saveVideo } from "playwright-video";
import { Utilities } from "../Utilities";

export default abstract class AbstractTest {
    public get ArtifactsPath(): string {
        return `${Constants.TestOutputPath}/${this.constructor.name}`;
    }

    public TestDuration: number | undefined;

    public readonly RunTest = async (): Promise<boolean> => {
        const start = new Date();
        const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
        try {
            const page = await browser.newPage();
            await saveVideo(page, `${this.ArtifactsPath}/${this.constructor.name}-${this.Name}.mp4`);
            await this.test(page);
            this.TestDuration = new Date().getTime() - start.getTime();
            return true;
        } catch (err) {
            this.TestDuration = new Date().getTime() - start.getTime();
            return false;
        } finally {
            await this.addVideoRecordingBuffer();
            browser.close();
        }
    };

    public abstract readonly Name: string;
    protected abstract test: (page: Page) => Promise<void>;

    private addVideoRecordingBuffer = async () => {
        await Utilities.Sleep(2000);
    };
}
