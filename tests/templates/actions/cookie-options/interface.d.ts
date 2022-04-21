export interface CookieOptions {
    name?: string;
    value?: string;
    domain?: string;
    path?: string;
    expires?: Date;
    maxAge?: number | 'Infinity' | '-Infinity';
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: string;
}