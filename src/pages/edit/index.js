import Edit from '@/components/Edit'

/**
  * If you would like access to the store from within a page's getServerSideProps or getStaticProps:
  *
  * ```
  * import { wrapper, updateCanvasContent } from '@/store/index'
  *
  * export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  *   // Now getServerSideProps has the store...
  *   await store.dispatch(updateCanvasContent('A work of art'))
  *
  *   return {
  *     // Do not pass values from the store as props. Connect the page, or use react-redux hooks instead.
  *     props: {}
  *   }
  * })
  *
  * ```
  * For getStaticProps, do the same as above, just `export const getStaticProps = wrapper.getStaticProps(store => ...` instead.
  *
  * For more details -> https://github.com/kirill-konshin/next-redux-wrapper/blob/7.x/README.md
  */

export default Edit