

import {setEmailField} from '../actions.js'
import {SET_EMAIL_FIELD} from '../constants.js'


describe('email field',()=>{



it('if it dipatches with correct email',()=>{


 let obj = setEmailField('alwin@gmail.com')


 expect(obj.type).toEqual(SET_EMAIL_FIELD)
 expect(obj.payload).toEqual('alwin@gmail.com')






})








})
