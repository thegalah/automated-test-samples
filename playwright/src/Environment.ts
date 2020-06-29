export default class Environment {
    public static readonly MySigninsAccountEmail = process.env["MYSIGNINS_ACCOUNT_EMAIL"] || "";
    public static readonly MySigninsAccountPassword = process.env["MYSIGNINS_ACCOUNT_PASSWORD"] || "";
}
