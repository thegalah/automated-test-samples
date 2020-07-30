export class Utilities {
    public static Sleep = (timeMs: number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, timeMs);
        });
    };
}
