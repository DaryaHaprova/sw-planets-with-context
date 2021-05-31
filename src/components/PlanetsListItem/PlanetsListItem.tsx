import { IPlanet } from 'types'
import clsx from 'clsx'

import styles from './PlanetListItem.module.css'

type IPlanetProps = {
    planet: IPlanet
    isActive: boolean
    setActivePlanet: (planet: IPlanet) => void
}

export const PlanetsListItem = ({
    planet,
    isActive,
    setActivePlanet,
}: IPlanetProps) => {
    return (
        <li
            onClick={() => setActivePlanet(planet)}
            className={clsx(styles.planetItem, isActive && styles.active)}
        >
            {planet.name}
        </li>
    )
}
