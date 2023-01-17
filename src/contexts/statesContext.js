import React from "react";

export const StateContext = React.createContext()

export function StateProvider({children}){
  const [state, dispatch] = React.useReducer(reducer, initialState);


  const onSuccess =()=> {
    dispatch({ type: actionTypes.success });
    setTimeout(()=>dispatch({type:actionTypes.regret}),3000);
  };


  const onError = ()=> {
    dispatch({ type: actionTypes.error });
    setTimeout(()=>dispatch({type:actionTypes.regret}),3000);
  };
  const onConfirm= ()=> dispatch({type: actionTypes.confirm });
  const onRegret=()=> dispatch({type:actionTypes.regret});
  return(
    <StateContext.Provider value={{state, onSuccess, onError, onConfirm, onRegret}}>
      {children}
    </StateContext.Provider>
  )
}

const initialState= {
  error: false,
  success: false,
  confirm: false,

}
const actionTypes = {
  success: 'SUCCESS',
  error:'ERROR',
  confirm: 'CONFIRM',
  regret:'REGRET'
}

const reducerObject = (state, payload)=>({
  [actionTypes.error]: {
    ...state,
    error:true,
    success:false,
    confirm:false,

  },
  [actionTypes.success]:{
    ...state, 
    error: false,
    success: true,
    confirm:false,

  },
  [actionTypes.confirm]:{
    ...state,
    error:false,
    success:false,
    confirm: true,

  },
  [actionTypes.regret]:{
    ...initialState
  }
})

const reducer = (state, action)=>{
  if(reducerObject(state)[action.type]){
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
}