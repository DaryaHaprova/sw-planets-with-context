export const request = (url: string) => fetch(url).then(res => res.json())
