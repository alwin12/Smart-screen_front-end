
import React from 'react'
import Provider from '../../root.js'
import FullTable from '../FullTable/FullTable'
import {mount} from 'enzyme'

import ReactTable from "react-table";

let wrapper;

beforeEach(()=>{

wrapper = mount(< Provider initialState = { {socketIO : { timetable:[{lecture:'s',
lectureName:'name',startTime:'20:30',endTime:'20:32',status:{active:true}}]}}}><FullTable/></Provider>)


})


it('renders a react table',()=>{

    console.log(wrapper.find(ReactTable))

   expect(wrapper.find(ReactTable).length).toEqual(1);




})
