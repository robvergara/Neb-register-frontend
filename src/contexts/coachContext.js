import React from "react";
import { createEntrenador, getEntrenadores, deleteEntrenador, updateEntrenadores } from '../services/entrenadores.services';
// import { ModalContext } from "./modalContext";
import { StateContext } from "./statesContext";
import { useAuth } from "./auth";

const initialTrainerState = { nombre:'', apellido:'', cedula:'',status:'' };

export const CoachContext = React.createContext()

export function CoachProvider ({children}){
  const {onSuccess, onError, onRegret} = React.useContext(StateContext);
  // const {setOpenModal} = React.useContext(ModalContext);
  const [entrenadores, setEntrenadores] = React.useState([]);
  const [modifiedCoach, setModifiedCoach] = React.useState(initialTrainerState);
  const [coachData, setCoachData] = React.useState(initialTrainerState);
  const auth = useAuth()

  React.useEffect(()=>{
    async function  trainerList (){
      const list = await getEntrenadores()
      // console.log(list)
      setEntrenadores(list)
    }
    if(auth.user!== null){
      trainerList()
    }
  },[auth])

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setCoachData(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const handleChangeModified = (e) =>{
    const {name, value} = e.target;
    setModifiedCoach(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const onSave= async(newcoach)=>{
    newcoach.status= 0;
    console.log(coachData);

    if (entrenadores.find(entrenador => entrenador.cedula === newcoach.cedula)){
      onError();
      return(console.log('la cedula ha sido utilizada'))
    }
    const newList = [...entrenadores];
    newList.push(newcoach);
    console.log(newcoach)
    await createEntrenador(newcoach);
    onSuccess();
    console.log('entrenador guardado correctamente');
    setEntrenadores(newList);
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    onRegret();
    onSave(coachData);

  }

  const onCLean=(e)=>{
    e.preventDefault();
    setCoachData(initialTrainerState);
  }

  const onCancel=(e)=>{
    e.preventDefault();
    setCoachData(coachData);
    // setOpenModal(false)
  }

  const onDelete= (id)=>{
    const deletedCoachIndex = entrenadores.findIndex(entrenador=> entrenador._id === id);
    console.log(entrenadores[deletedCoachIndex]);
    const newList = [...entrenadores];
    newList.splice(deletedCoachIndex,1);
    deleteEntrenador(id)
    console.log(newList)
    setEntrenadores(newList);
  }

  const onUpdate=async(id,updateCoach)=>{
    try {
      updateCoach.status = 0;
      const coachIndex = entrenadores.findIndex(entrenador => entrenador._id === id);
      const newList = [...entrenadores];
      newList[coachIndex] = {...newList[coachIndex], updateCoach}
      console.log(newList[coachIndex])
      await updateEntrenadores(id,updateCoach);
      onSuccess();
      console.log('entrenador modificado correctamente');
      return setEntrenadores(newList);
    } catch (error) {
      console.log(error)
    }

  }

  return(
    <CoachContext.Provider 
    value={{
      entrenadores, 
      setEntrenadores, 
      handleChange, 
      onSave, 
      onSubmit, 
      onCancel, 
      coachData, 
      setCoachData, 
      onCLean, 
      onDelete, 
      onUpdate,
      handleChangeModified,
      modifiedCoach, 
      setModifiedCoach
    }}>
      {children}
    </CoachContext.Provider>
  )
}