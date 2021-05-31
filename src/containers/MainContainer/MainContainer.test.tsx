import React from 'react'
import { MainContainer } from './MainContainer'
import { render } from '@testing-library/react'
import GetPlanetsMock from 'data/GetPlanetsMock'
import { PlanetsContext } from 'components'

describe('MainContainer', () => {
    it('render loading if pending is true', () => {
        const planets = {
            pending: true,
            planets: [],
            error: null,
        } as any

        const { getByTestId } = render(
            <PlanetsContext.Provider value={planets}>
                <MainContainer />
            </PlanetsContext.Provider>
        )

        expect(getByTestId('loading')).toHaveTextContent('Loading...')
    })

    it('render error if error is string', () => {
        const planets = {
            pending: false,
            planets: [],
            error: 'error',
        } as any

        const { getByTestId } = render(
            <PlanetsContext.Provider value={planets}>
                <MainContainer />
            </PlanetsContext.Provider>
        )

        expect(getByTestId('error')).toHaveTextContent('Error')
    })

    it('render planets and description', () => {
        const planets = {
            pending: false,
            planets: GetPlanetsMock,
            error: null,
        } as any

        const { getByTestId } = render(
            <PlanetsContext.Provider value={planets}>
                <MainContainer />
            </PlanetsContext.Provider>
        )

        expect(getByTestId('planets-list')).toHaveTextContent('Tatooine')
        expect(getByTestId('planet-description')).toBeDefined()
    })
})
