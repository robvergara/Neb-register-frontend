import React from "react";
import {getArrayPayments, enterPayment} from "../services/payments.services";
import { StateContext } from "./statesContext";
import{getStudents} from "../services/students.services"

export const PaymentContext = React.createContext()

export function PaymentProvider({children}){

  const {onSuccess, onError, onRegret } = React.useContext(StateContext);
  const [dataPayment, setdataPayment] = React.useState({});
  const [payments, setPayments] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [estudianteQuePago, setEstudianteQuePago] = React.useState({})

  const HomeSearchHandleChange=(e) =>{
    setSearchValue(e.target.value);
  };

  const handleChange=(e)=>{
    const {name, value} = e.target;
    setdataPayment(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const PaymentHandleChange= (e) =>{
    const {value} = e.target;
    setdataPayment(prevState=>({
      ...prevState,
      value
    }))
  }

  const onSearch = async(cedula)=>{
    try {
      const paymentList = await getArrayPayments(cedula);
      const studentList = await getStudents();
      const studentWhoPaid = studentList.find(student => student.cedula === cedula);
      setEstudianteQuePago(studentWhoPaid);
      // console.log(studentWhoPaid);
      // console.log(paymentList);
      setPayments(paymentList);
    } catch (error) {
      console.log(error);
      setPayments(undefined);
    }

  }

  const onSave = async(newPayment)=>{
    if (payments.find(payment=> 
      payment.mes === newPayment.mes && 
      payment.ano === newPayment.ano && 
      payment.cedula === newPayment.cedula
      )){
      onError();
      console.log('el pago de este mes ya ha sido realizado');
      onError();
      return 
    }
    try {      
      // const newList = [...payments];
      const {message} = await enterPayment(newPayment);
      console.log(message.errors);
      if(message.errors){
        onError()
        return;
      }
      // newList.push(newPayment);
      onSuccess();
      // setPayments(newList);
    } catch (error) {
      console.log(error);
      onError()
    }
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    onRegret();
    onSave(dataPayment);
  }



  return(
    <PaymentContext.Provider 
      value={{
        searchValue, 
        payments, 
        estudianteQuePago, 
        dataPayment, 
        setEstudianteQuePago, 
        setSearchValue, 
        HomeSearchHandleChange, 
        onSearch, 
        PaymentHandleChange, 
        onSubmit, 
        handleChange, 
        setdataPayment
      }}>
      {children}
    </PaymentContext.Provider>
  )
}