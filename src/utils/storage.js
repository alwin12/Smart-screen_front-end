const JSON = require('circular-json');



export const saveToLocalStorage = (state)=>{

console.log('local',state)
  try{
    console.log(state);

    const serialisedState = JSON.stringify(state);

    localStorage.setItem('state',serialisedState)

  }catch(e){

    console.log(e)
}

}

export const loadFromLocalStorage = ()=>{

  try{
    let serialisedState = localStorage.getItem('state')

      if (serialisedState ==null) return undefined

    return JSON.parse(serialisedState)
  }

  catch(e){

    console.log(e)
    return undefined
  }
}
