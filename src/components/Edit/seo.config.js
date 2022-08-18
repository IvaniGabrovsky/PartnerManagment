/**
 * next-seo is used to inject the HTMl head with SEO attributes
 * for more details on NextSeo configuration options, see
 * https://github.com/garmeeh/next-seo#nextseo-options
 */
 const head = {
    title: 'Home - NextJS Starter Kit | Telus',
    description: 'This is the home page for the TELUS NextJS Starter Kit',
    canonical: 'https://telus.com'
  }
  
  head.openGraph = {
    title: head.title,
    url: head.canonical,
    description: head.description
  }
  
export default head
  