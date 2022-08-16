import createLocaleMiddleware from '@telus/next-locale-middleware'
import { basePath } from '../../next.config'
/*
 * For details on cookies, redirects, and config options see here:
 * https://github.com/telus/platform-web/tree/main/packages/next-locale-middleware#readme
 */
const middleware = createLocaleMiddleware({ basePath })

export default middleware
