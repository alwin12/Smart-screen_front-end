
import React from 'react'
import {mount} from "enzyme"
import Provider from '../root.js'
import App from '../App'
import Login from '../Components/Login'
import moxios from 'moxios'



beforeEach(()=>{

  moxios.install()
  moxios.stubRequest('http://localhost:3002/login')

  moxios.





})

it('login api',()=>{


  const wrapper = mount(<Provider><Login/></Provider)





})
