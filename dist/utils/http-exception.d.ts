export declare class HttpException extends Error {
    statusCode: number;
    message: string;
    error: string | null;
    constructor(statusCode: number, message: string, error?: string);
}
