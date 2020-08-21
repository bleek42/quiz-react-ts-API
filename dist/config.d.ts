interface Configuration {
    PORT: string | number | null;
    NODE_ENV: string | number | null;
    DATABASE_URL?: string;
    TEST_URL?: string | null;
}
export declare const config: Configuration;
export {};
