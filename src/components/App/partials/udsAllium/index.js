import '@telus-uds/palette-allium/build/web/fonts/fonts-cdn.css'
import { AlliumProvider } from '@telus-uds/ds-allium'

export function withAllium (App) {
  return function AlliumApp (props) {
    return (
      <AlliumProvider>
        <App {...props} />
      </AlliumProvider>
    )
  }
}
