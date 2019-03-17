import React from 'react'

import {mount} from 'enzyme'
import HeaderStudent from '../HeaderStudent/HeaderStudent'
import App from '../../App'
import Provider from '../../root.js'

import {BrowserRouter as Router} from 'react-router-dom'
import ClockComponent from '../ClockComponent/ClockComponent'
it('has a logo and a clock ',()=>{


const wrapped = mount(<Provider><Router><HeaderStudent/></Router></Provider>);

expect(wrapped.find('img').length).toEqual(1);

expect(wrapped.find(ClockComponent ).length).toEqual(1);




})
