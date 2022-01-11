const localStorageKey = process.env.REACT_APP_NAME ?? 'key';

type Value = {
    [item: string]: {} | string | null
}

type Storage = {
    [key: string]: Value
}

export const useLocalStorage = () => {
    return {set: setToLS, get: getFromLS}
}

const setToLS = (key: string, value: Value) => {
    let stored = window.localStorage.getItem(localStorageKey);
    let obj: Storage = {};
    if (stored) {
        obj = JSON.parse(stored);
    }
    obj[key] = value;
    window.localStorage.setItem(localStorageKey, JSON.stringify(obj));
}

const getFromLS = (key: string) => {
    const value = window.localStorage.getItem(localStorageKey);
    let obj: Storage = {};
    if (value) {
        obj = JSON.parse(value);
        if (obj) {
            return obj[key]
        }
    }
    return null;
}
