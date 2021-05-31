import { MainContainer } from 'containers/MainContainer'

import { Header, Footer, PlanetsProvider } from 'components'

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
