import React from 'react'
import { PlanetDescription } from './PlanetDescription'
import GetPlanetsMock from '../../data/GetPlanetsMock'
import { render, screen } from '@testing-library/react'

describe('Planet Description', () => {
    const planet = GetPlanetsMock[0]
    render(<PlanetDescription planet={planet} />)
    it('contains planets information', () => {
        expect(screen.getByRole('heading')).toHaveTextContent(planet.name)
        expect(screen.getByTestId('climate')).toHaveTextContent(planet.climate)
        expect(screen.getByTestId('diameter')).toHaveTextContent(
            planet.diameter
        )
        expect(screen.getByTestId('population')).toHaveTextContent(
            planet.population
        )
        expect(screen.getByTestId('terrain')).toHaveTextContent(planet.terrain)
    })
})
