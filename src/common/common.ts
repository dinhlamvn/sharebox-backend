
export class Common {

    public static isProduction(): boolean {
        return parseInt(process.env.PRODUCTION) == 1;
    }

    public static nowInMillis(): number {
        return +(new Date());
    }

    public static getDatabaseURL(): string {
        return Common.isProduction() 
        ? 'https://share-box-6c293-default-rtdb.asia-southeast1.firebasedatabase.app' 
        : 'https://sharebox-dev-502a2-default-rtdb.firebaseio.com';
    }
}