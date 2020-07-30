import * as fs from "fs";
import AbstractTest from "./Tests/AbstractTest";
import Constants from "./Constants";
import MyAccountTest from "./Tests/MyAccount/MyAccountTest";
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

const tests: Array<AbstractTest> = [MySigninsLoginTest, MyStaffLoginTest, MyAccountTest];
console.log(`Running ${tests.length} tests`);

tests.forEach(async (test) => {
    makeFolder(test.ArtifactsPath);
    const testNameAndDescription = `${test.constructor.name} - ${test.Name}`;
    console.log(`---- Running ${testNameAndDescription}`);
    const wasTestSuccessful = await test.RunTest();
    console.log(`${test.constructor.name} result: ${wasTestSuccessful ? "Passed" : "Failed"}`);
    console.log(`${test.constructor.name} time: ${test.TestDuration}ms`);
});
