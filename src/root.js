import React from 'react'
import {Provider} from 'react-redux'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {socketIO,inputFields,loginAPI,uploadAPI,app,configAuth} from './redux/reducers.js'

import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {loadFromLocalStorage,saveToLocalStorage} from './utils/storage.js'


const rootReducer = combineReducers({socketIO,inputFields,loginAPI,uploadAPI,app,configAuth})
const logger = createLogger();




export default ({children,initialState={}})=>{


  const store = createStore(rootReducer,loadFromLocalStorage(),applyMiddleware(thunkMiddleware,logger))
  store.subscribe(()=> saveToLocalStorage(store.getState()))

  return (

  <Provider store = {store} >

{children}

  </Provider>



  )
}
