import { GlobalStyles } from './AppStyles'
import { GeneralContextProvider } from './contexts/GeneralContext'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <GeneralContextProvider>
        <Home />
        <GlobalStyles />
      </GeneralContextProvider>
    </>
  )
}

export default App
