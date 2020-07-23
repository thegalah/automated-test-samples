import * as ffmpeg from "ffmpeg-static";
import * as fs from "fs";
import AbstractTest from "./Tests/AbstractTest";
import Constants from "./Constants";
import MySigninsLoginTest from "./Tests/Mysignins/MySigninsLoginTest";
import MyStaffLoginTest from "./Tests/MyStaff/MyStaffLoginTest";
import "source-map-support/register";
process.env.FFMPEG_PATH = require("ffmpeg-static");

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

const makeFolder = (folder: string) => {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
};

makeFolder(Constants.TestOutputPath);

const tests: Array<AbstractTest> = [MyStaffLoginTest];
console.log(`Running ${tests.length} tests`);

tests.forEach(async (test) => {
    makeFolder(test.ArtifactsPath);
    const testNameAndDescription = `${test.constructor.name} - ${test.Name}`;
    console.log(`---- ${testNameAndDescription}`);
    const wasTestSuccessful = await test.RunTest();
    console.log(`Result: ${wasTestSuccessful ? "Passed" : "Failed"}`);
    console.log(`Time: ${test.TestDuration}ms`);
});
