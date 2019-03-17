import React from 'react'
import {Provider} from 'react-redux'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {socketIO,inputFields,loginAPI,uploadAPI,app} from './redux/reducers.js'

import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'


const rootReducer = combineReducers({socketIO,inputFields,loginAPI,uploadAPI,app})
const logger = createLogger();




export default ({children,initialState={}})=>{


  const store = createStore(rootReducer,{
    loginAPI:{token:localStorage.getItem('token')},
    ...initialState


      // initial state
  },applyMiddleware(thunkMiddleware,logger))

  return (

  <Provider store = {store} >

{children}

  </Provider>



  )
}
