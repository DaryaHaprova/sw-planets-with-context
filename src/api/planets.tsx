import { request } from 'utils'

export const getPlanets = () =>
    request('https://swapi.dev/api/planets').then(res => res.results)
