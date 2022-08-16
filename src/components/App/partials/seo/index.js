import { DefaultSeo } from 'next-seo'
import seoConfig from './seo.config'

export function withSeoDefaults (App) {
  return function SeoApp (props) {
    return (
      <>
        <DefaultSeo {...seoConfig} />
        <App {...props} />
      </>
    )
  }
}
