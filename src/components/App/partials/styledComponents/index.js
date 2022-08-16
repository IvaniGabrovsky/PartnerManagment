import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@telus/next-styled-base'
import theme from '@/styles/theme'

export function withAppStyles (App) {
  return function StyledApp (props) {
    return (
      <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <App {...props} />
      </ThemeProvider>
    </>
    )
  }
}
