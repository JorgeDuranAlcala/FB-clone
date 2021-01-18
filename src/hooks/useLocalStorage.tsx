

export default function useLocalStorage() {

    const getItem = (key: string) => {
        return window.localStorage.getItem(key)
    }

    const setItem = (key: string, value: string) => {
        return window.localStorage.setItem(key, value)
    }

    return {
        getItem,
        setItem
    }

}