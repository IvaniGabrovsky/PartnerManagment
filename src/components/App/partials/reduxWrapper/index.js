import { wrapper } from '@/store/index'

export function withReduxWrapper (App) {
  /**
   * This allows any page (or child component) to be connected to the store or use react-redux hooks.
   *
   * For more details -> https://github.com/kirill-konshin/next-redux-wrapper/blob/7.x/README.md
   */
  return wrapper.withRedux(App)
}
