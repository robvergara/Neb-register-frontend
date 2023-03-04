import React from "react";

export const StateContext = React.createContext()

export function StateProvider({children}){
  const [state, dispatch] = React.useReducer(reducer, initialState);


  const onSuccess =()=> {
    dispatch({ type: actionTypes.success });
    setTimeout(()=>dispatch({type:actionTypes.regret}),3000);
  };
  const onSuccessPayment =()=> {
    dispatch({ type: actionTypes.paymentSuccess });
    setTimeout(()=>dispatch({type:actionTypes.regret}),3000);
  };
  const onSuccessConfig =()=> {
    dispatch({ type: actionTypes.configSuccess });
    setTimeout(()=>dispatch({type:actionTypes.regret}),3000);
  };
  const onError = ()=> {
    dispatch({ type: actionTypes.error });
    setTimeout(()=>dispatch({type:actionTypes.regret}),2000);
  };
  const onErrorPayment = ()=> {
    dispatch({ type: actionTypes.paymentError });
    setTimeout(()=>dispatch({type:actionTypes.regret}),2000);
  };
  const onErrorConfig = ()=> {
    dispatch({ type: actionTypes.configError });
    setTimeout(()=>dispatch({type:actionTypes.regret}),2000);
  };

  const onConfirm= ()=> dispatch({type: actionTypes.confirm });

  const onRegret=()=> dispatch({type:actionTypes.regret});
  
  return(
    <StateContext.Provider value={{state, onSuccess, onError, onConfirm, onRegret, onSuccessPayment, onSuccessConfig, onErrorPayment, onErrorConfig}}>
      {children}
    </StateContext.Provider>
  )
}

const initialState= {
  error: false,
  paymentError: false,
  paymentSuccess: false,
  configError:false,
  configSuccess:false,
  success: false,
  confirm: false,

}
const actionTypes = {
  success: 'SUCCESS',
  error:'ERROR',
  confirm: 'CONFIRM',
  regret:'REGRET',
  paymentError: 'PAYMENTERROR',
  paymentSuccess: 'PAYMENTSUCCESS',
  configError: 'CONFIGERROR',
  configSuccess: 'CONFIGSUCCESS'
}

const reducerObject = (state, payload)=>({
  [actionTypes.error]: {
    ...state,
    error:true,
    success:false,
    confirm:false,
    paymentError: false,
    paymentSuccess: false,
    configError:false,
    configSuccess:false,

  },
  [actionTypes.success]:{
    ...state, 
    error: false,
    success: true,
    confirm:false,
    paymentError: false,
    paymentSuccess: false,
    configError:false,
    configSuccess:false,

  },
  [actionTypes.confirm]:{
    ...state,
    error:false,
    success:false,
    confirm: true,
    paymentError: false,
    paymentSuccess: false,
    configError:false,
    configSuccess:false,

  },
  [actionTypes.paymentError]:{
    ...state,
    error:false,
    success:false,
    confirm: true,
    paymentError: true,
    paymentSuccess: false,
    configError:false,
    configSuccess:false,
  },
  [actionTypes.paymentSuccess]:{
    ...state,
    error:false,
    success:false,
    confirm: true,
    paymentError: false,
    paymentSuccess: true,
    configError:false,
    configSuccess:false,
  },
  [actionTypes.configError]:{
    ...state,
    error:false,
    success:false,
    confirm: true,
    paymentError: false,
    paymentSuccess: false,
    configError:true,
    configSuccess:false,
  },
  [actionTypes.configSuccess]:{
    ...state,
    error:false,
    success:false,
    confirm: true,
    paymentError: false,
    paymentSuccess: false,
    configError:false,
    configSuccess:true,
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