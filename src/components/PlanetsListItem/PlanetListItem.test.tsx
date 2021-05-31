import GetPlanetsMock from 'data/GetPlanetsMock'
import { PlanetsListItem } from './PlanetsListItem'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'

describe('Planet Description', () => {
    const planet = GetPlanetsMock[0]
    const setActivePlanetMock = jest.fn()
    render(
        <PlanetsListItem
            planet={planet}
            isActive={true}
            setActivePlanet={setActivePlanetMock}
        />
    )

    it('should call setActivePlanet on click', () => {
        fireEvent.click(screen.getByRole('listitem'))
        expect(screen.getByRole('listitem')).toHaveTextContent(planet.name)
        expect(setActivePlanetMock).toHaveBeenCalledTimes(1)
    })
})
