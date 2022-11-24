import { configureStore } from '@reduxjs/toolkit'
import Reducers from "./reducers"

export default configureStore({
    reducer: Reducers,
})