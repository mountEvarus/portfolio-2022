type LocalStorageFunctions = {
  getLocalStorage: (key: string) => string | null
  setLocalStorage: (key: string, value: string) => void
}

export function useLocalStorage(): LocalStorageFunctions {
  function getLocalStorage(key: string): string | null {
    return localStorage.getItem(key)
  }

  function setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  return { getLocalStorage, setLocalStorage }
}
