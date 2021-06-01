import { MainContainer } from 'containers/MainContainer'

import { Header, Footer } from 'components'
import { PlanetsProvider } from 'state'

export const App = () => {
    return (
        <>
            <Header />

            <PlanetsProvider>
                <MainContainer />
            </PlanetsProvider>

            <Footer />
        </>
    )
}
