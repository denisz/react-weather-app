//Async localStorage
class LocalStorageService {
    setItem(key, value) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    }

    removeItem(key) {
        return Promise.resolve().then(function () {
            localStorage.removeItem(key);
        });
    }

    getItem(key) {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    }

    clear() {
        return Promise.resolve().then(function () {
            return localStorage.clear();
        });
    }
}


export { LocalStorageService }