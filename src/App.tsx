import { ThemeProvider } from "@emotion/react"
import { theme } from "./styles/theme"
import { GlobalStyles } from "./styles/GlobalStyles"
import { RoutesPage } from "./pages/RoutesPage"

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RoutesPage />
      </ThemeProvider>
    </>
  )
}

export default App
