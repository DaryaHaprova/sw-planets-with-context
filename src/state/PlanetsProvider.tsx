import { createContext, ReactElement, useState } from 'react'
import useSWR from 'swr'

import { getPlanets } from 'api/planets'
import { IPlanet } from 'types'

export interface IPlanetsState {
    pending: boolean
    planets: Array<IPlanet>
    error: string | null
}

export const PlanetsContext = createContext<IPlanetsState>({
    pending: false,
    planets: [],
    error: null,
})

type Props = {
    children: ReactElement
}

export const PlanetsProvider = ({ children }: Props) => {
    const {
        data,
        isValidating: pending,
        error,
    } = useSWR('api/planets', getPlanets)

    const contextValue = {
        pending,
        planets: data,
        error,
    }

    return (
        <PlanetsContext.Provider value={contextValue}>
            {children}
        </PlanetsContext.Provider>
    )
}
