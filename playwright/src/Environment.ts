export default class Environment {
    public static readonly MySigninsAccountEmail = process.env["MYSIGNINS_ACCOUNT_EMAIL"] || "";
    public static readonly MySigninsAccountPassword = process.env["MYSIGNINS_ACCOUNT_PASSWORD"] || "";

    public static readonly MyAccountAccountEmail = process.env["MYACCOUNT_ACCOUNT_EMAIL"] || "";
    public static readonly MyAccountAccountPassword = process.env["MYACCOUNT_ACCOUNT_PASSWORD"] || "";

    public static readonly MyStaffAccountEmail = process.env["MYSTAFF_ACCOUNT_EMAIL"] || "";
    public static readonly MyStaffAccountPassword = process.env["MYSTAFF_ACCOUNT_PASSWORD"] || "";
    public static readonly MyApplicationsAccountEmail = process.env["MYAPPLICATIONS_ACCOUNT_EMAIL"] || "";
    public static readonly MyApplicationsAccountPassword = process.env["MYAPPLICATIONS_ACCOUNT_PASSWORD"] || "";
}
