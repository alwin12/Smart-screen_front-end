import React from 'react'
import ReactDOM from 'react-dom'
import {mount} from 'enzyme'
import Header from '../Header/Header'
import FullTable from '../FullTable/FullTable'


import App from '../../App'
import Provider from '../../root.js'
import {BrowserRouter as Router} from 'react-router-dom'

it('shows a header',()=>{




  const wrapped = mount(<Provider><App/></Provider>)


  expect(wrapped.find(Header).length).toEqual(1)



})
