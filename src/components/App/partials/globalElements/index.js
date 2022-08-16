// import { GlobalElementsProvider } from '@telus/next-global-elements'

export function withGlobalElementsApp (App) {
  return function GlobalElementsApp (props) {
    return (
      // <GlobalElementsProvider>
        <App {...props} />
      // </GlobalElementsProvider>
    )
  }
}
