import styles from './Header.module.css'

export const Header = () => {
    return (
        <header>
            <h1 className={styles.header} data-testid="header">
                List of Star Wars Planets
            </h1>
        </header>
    )
}
