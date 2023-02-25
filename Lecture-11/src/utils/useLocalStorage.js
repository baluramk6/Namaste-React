const useLocalStorage = () => {

    const setStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    const getStorage = (key) => {
        const get = localStorage.getItem(key)
        const data = JSON.parse(get)
        return data;
    }


    return [setStorage, getStorage]
}

export default useLocalStorage;