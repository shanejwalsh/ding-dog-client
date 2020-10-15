interface HttpOptions {
    headers?: string;
}

class HttpClient {
    _BASE_URL: string;
    _headers: string;

    constructor(BASE_URL: string, options: HttpOptions) {
        this._BASE_URL = BASE_URL || '';
        this._headers = options.headers || '';
    }
}

export default HttpClient;
