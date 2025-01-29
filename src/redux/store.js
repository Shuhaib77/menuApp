import  {configureStore} from '@reduxjs/toolkit'
import menuSlice from './menuSlice'

const store=configureStore({
    reducer:{
        menuItems:menuSlice
    }
})

export default store