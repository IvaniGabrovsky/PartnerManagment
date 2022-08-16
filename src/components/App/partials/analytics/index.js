import Script from 'next/script'
import analyticsScripts from '@telus/analytics-scripts'
import alloyAnalytics from '@telus/alloy-analytics'

// 2nd param can also be 'mytelus' -> https://github.com/telus/analytics-scripts/blob/master/lib/tag-manager.js
const tagManagerSrc = analyticsScripts.getTagManagerScriptPath(
  process.env.NEXT_PUBLIC_APP_ENV,
  'telusglobal'
)

export function withAnalytics (App) {
  alloyAnalytics.config({
    defaultValues: {
      webPageDetails: {
        // Line of business (learn more here https://github.com/telus/alloy-analytics/blob/master/docs/SCHEMAS.md#lob)
        lob: '<line of business>',
        siteGenerator: 'https://github.com/telus/platform-web'
      }
    }
  })

  return function AnalyticsApp (props) {
    return (
      <>
        <Script src={tagManagerSrc} />
        <App {...props} />
      </>
    )
  }
}
