import React from "react";
import { StateContext } from "./statesContext";
import {getStudents,createStudent,updateStudent,deleteStudent} from "../services/students.services"

const initialStudentState = {    
  nombre:'',
  apellido: '',
  cedula: '',
  edad: '',
  categoria_id: '',
  email: ''}

export const StudentContext = React.createContext()

export function StudentProvider({children}){
  const {onSuccess, onError, onRegret } = React.useContext(StateContext);
  const [estudiantes, setEstudiantes] = React.useState([]);
  const [modifiedStudent, setModifiedStudent] = React.useState(initialStudentState)
  const [studentData, setstudentData] = React.useState(initialStudentState);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(()=>{
    async function  studentList (){
      const list = await getStudents()
      // console.log(list)
      setEstudiantes(list)
    }
    studentList()
  },[searchValue])

  let searchedStudents=[];

  if (!searchValue.length >=1){
    searchedStudents = estudiantes;
  } else{
    searchedStudents = estudiantes.filter(estudiante =>{
      const cedula = estudiante.cedula;
      return cedula.includes(searchValue);
    });
  }

  const studentHandleChange = (e) =>{
    const {name, value} = e.target;
    setstudentData(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const handleChangeModified = (e) =>{
    const {name, value} = e.target;
    setModifiedStudent(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const onSave= async(newStudent)=>{

    // console.log(studentData);

    if (estudiantes.find(estudiante => estudiante.cedula === newStudent.cedula)){
      onError();
      return(console.log('la cedula ya ha sido registrada'))
    }
    const newList = [...estudiantes];
    newList.push(newStudent);
    console.log(newStudent);
    await createStudent(newStudent);
    onSuccess();
    console.log('estudiante guardado correctamente');
    setEstudiantes(newList);
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    onRegret();
    console.log(studentData)
    onSave(studentData);
  }

  const onCLeanStudentField=(e)=>{
    e.preventDefault();
    setstudentData(initialStudentState);
    setModifiedStudent(initialStudentState);
  }

  const onCancel=(e)=>{
    e.preventDefault();
    setstudentData(studentData);
    // setOpenModal(false)
  }

  const onDelete= async(id)=>{
    const deleteStudentIndex = estudiantes.findIndex(estudiante=> estudiante._id === id);
    console.log(estudiantes[deleteStudentIndex]);
    const newList = [...estudiantes];
    newList.splice(deleteStudentIndex,1);
    await deleteStudent(id)
    console.log(newList)
    setEstudiantes(newList);
  }

  const onUpdate=async(id,studentToUpdate)=>{
    try {

      const studentIndex = estudiantes.findIndex(estudiante => estudiante._id === id);
      const newList = [...estudiantes];
      newList[studentIndex] = {...newList[studentIndex], studentToUpdate}
      console.log(newList[studentIndex])
      await updateStudent(id,studentToUpdate);
      onSuccess();
      console.log('estudiante modificado correctamente');
      console.log(newList[studentIndex])
      return setEstudiantes(newList);
    } catch (error) {
      console.log(error)
    }

  }

  return(
    <StudentContext.Provider 
      value={{
        estudiantes, 
        setEstudiantes,
        modifiedStudent, 
        setModifiedStudent,
        studentData, 
        setstudentData,
        studentHandleChange,
        handleChangeModified,
        onSave,
        onSubmit,
        onCLeanStudentField,
        onCancel,
        onDelete,
        onUpdate,
        searchValue, 
        setSearchValue,
        searchedStudents
      }}>
      {children}
    </StudentContext.Provider>
  )
}