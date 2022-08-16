import { configureStore, createSlice } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

const canvasSlice = createSlice({
  name: 'canvas',
  initialState: {
    init: true,
    content: 'a blank canvas'
  },
  reducers: {
    updateCanvasContent (state, action) {
      return {
        init: false,
        content: action.payload
      }
    }
  },
  extraReducers: {
    // See https://github.com/kirill-konshin/next-redux-wrapper/blob/7.x/README.md#state-reconciliation-during-hydration
    // This is only necessary if using wrapper.getServerSideProps/wrapper.getStaticProps
    [HYDRATE]: (state, action) => {
      if (!action.payload.canvas.init) {
        // action.payload contains the entire state at the time of hydration
        // ie. Right after wrapper.getServerSideProps/wrapper.getStaticProps is called
        // If a slice of state was not modified within wrapper.getServerSideProps/wrapper.getStaticProps, then its
        // value in the payload will be initialState NOT state.
        return action.payload.canvas
      }
      // state, is the state of this slice at the time of page navigation.
      // ie. Prior to wrapper.getServerSideProps/wrapper.getStaticProps
      // If this is an initial load or refresh, then it will be the initialState.
      // Otherwise, it will be the state of this slice carried over from the previous page.
      return state
    }
  }
})

export const { updateCanvasContent } = canvasSlice.actions

const makeStore = () => configureStore({
  reducer: {
    [canvasSlice.name]: canvasSlice.reducer
  }
})

export const wrapper = createWrapper(makeStore)
