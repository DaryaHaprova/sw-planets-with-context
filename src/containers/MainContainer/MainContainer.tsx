import React, { useContext, useEffect, useState } from 'react'

import styles from './MainContainer.module.css'

import { PlanetsListItem, PlanetDescription } from 'components'
import { PlanetsContext } from '../../state'
import { IPlanet } from 'types'

export const MainContainer = () => {
    const { pending, planets, error } = useContext(PlanetsContext)

    const [activePlanet, setActivePlanet] = useState<IPlanet | null>(
        planets?.[0]
    )

    useEffect(() => {
        if (planets?.length) {
            setActivePlanet(planets[0])
        }
    }, [planets])

    if (pending) return <div data-testid="loading">Loading...</div>
    if (error) return <div data-testid="error">Error</div>

    return (
        <div className={styles.mainContainer} data-testid="main-container">
            <ul className={styles.planetsList} data-testid="planets-list">
                {planets.map((planet: IPlanet) => (
                    <PlanetsListItem
                        key={planet.name}
                        setActivePlanet={planet => {
                            setActivePlanet(planet)
                        }}
                        isActive={planet.name === activePlanet?.name}
                        planet={planet}
                    />
                ))}
            </ul>

            {activePlanet && <PlanetDescription planet={activePlanet} />}
        </div>
    )
}
