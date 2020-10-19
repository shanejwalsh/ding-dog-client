interface Headers  {
    [key: string]: string;
};

interface HttpOptions {
    headers?: Headers;
}

class HttpClient {
    _BASE_URL: string;
    _headers: Headers;

    constructor(BASE_URL: string, options: HttpOptions = {}) {
        this._BASE_URL = BASE_URL || '';
        this._headers = options.headers || {};
    }

    setHeader(key: string, value: string) {
        this._headers[key] = value;
        return this;
    }

    async _fetchJSON (pathname: string, options: object = {}) {
        const result = await fetch(`${this._BASE_URL}${pathname}`, {
            ...options,
            headers: this._headers,
        })

        if (!result.ok) {
            throw new Error(result.statusText);
        }

        return result.json();
    }

    get(pathname: string, options: object = {}) {
        return this._fetchJSON(
            pathname,
            {
                ...options,
                method: 'GET'
            }
        );
    }

};

export default HttpClient;
