import { IPlanet } from 'types'

import styles from './PlanetDescription.module.css'

type IPlanetDescriptionProps = {
    planet: IPlanet
}

export const PlanetDescription = ({ planet }: IPlanetDescriptionProps) => {
    return (
        <div
            className={styles.planetDescription}
            data-testid="planet-description"
        >
            <h2>{planet.name}</h2>
            <ul>
                <li data-testid="climate">climate: {planet.climate}</li>
                <li data-testid="diameter">diameter: {planet.diameter}</li>
                <li data-testid="population">
                    population: {planet.population}
                </li>
                <li data-testid="terrain">terrain: {planet.terrain}</li>
            </ul>
        </div>
    )
}
