class CurlService {
    constructor(config) {
        this.request = config;
    }

    getHeaders() {
        let headers = this.request.headers,
            curlHeaders = '';

        if (headers.hasOwnProperty('common')) {
            headers = this.request.headers[this.request.method];
        }

        for(let property in this.request.headers) {
            if(!['common', 'delete', 'get', 'head', 'patch', 'post', 'put'].includes(property)) {
                headers[property] = this.request.headers[property];
            }
        }

        for (let property in headers) {
            let header = `${property}:${headers[property]}`;
            curlHeaders = `${curlHeaders} -H "${header}"`
        }

        return curlHeaders.trim();
    }

    getMethod() {
        return `-X ${this.request.method.toUpperCase()}`;
    }

    getBody() {
        if(
            (typeof this.request.data !== 'undefined')
          && this.request.data !== ''
          && Object.keys(this.request.data).length
          && this.request.method.toUpperCase() !== 'GET') {
            let data = (typeof this.request.data === 'object'
                || Array.isArray(this.request.data)) ? JSON.stringify(this.request.data) : this.request.data;
            return `--data '${data}'`.trim();
        } else {
            return '';
        }
    }

    getUrl() {
        return this.request.url.trim();
    }

    generateCommand() {
        return `curl ${this.getMethod()} ${this.getHeaders()} ${this.getBody()} ${this.getUrl()}`.trim().replace(/\s{2,}/g, ' ');
    }
}

export { CurlService }