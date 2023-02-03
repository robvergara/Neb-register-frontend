import React from "react";
import {getCategories, createCategory, updateCategory, deleteCategory} from "../services/categories.services"
import { useAuth } from "./auth";
import { StateContext } from "./statesContext";

const categoriesDefault = {nombre:'', edad:'', genero:'', entrenador_id:''}

export const CategoryContext = React.createContext()

export function CategoryProvider({children}){
  const {onSuccess, onError, onRegret} = React.useContext(StateContext);
  const [categoriesData, setCategoriesData] = React.useState(categoriesDefault);
  const [modifiedCategory, setModifiedCategory] = React.useState(categoriesDefault)
  const [categories, setCategories] = React.useState([]);
  const auth = useAuth()

  React.useEffect(()=>{
    async function  trainerList (){
      const list = await getCategories()
      // console.log(list)
      setCategories(list)
    }
    if(!!auth.user){
      trainerList()
    }
  },[auth]);

  const categoryHandleChange = (e) =>{
    const {name, value} = e.target;
    setCategoriesData(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const categoryHandleChangeModified = (e) =>{
    const {name, value} = e.target;
    setModifiedCategory(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const onSaveCategory= async(newCategory)=>{

    console.log(categoriesData);

    if (categories.find(category => (category.nombre === newCategory.nombre && category.genero === newCategory.genero))){
      onError();
      return(console.log('la categoria ya ha sido creada'))
    }
    const newList = [...categories];
    newList.push(newCategory);
    console.log(newCategory)
    await createCategory(newCategory);
    onSuccess();
    console.log('categoria guardado correctamente');
    setCategories(newList);
  }

  const onSubmitCategory=(e)=>{
    e.preventDefault();
    onRegret();
    onSaveCategory(categoriesData);
  }

  const onCLeanCategory=(e)=>{
    e.preventDefault();
    setCategoriesData(categoriesDefault);
  }

  const onCancelCategory=(e)=>{
    e.preventDefault();
    setCategoriesData(categoriesData);
    // setOpenModal(false)
  }

  const onDeleteCategory= (id)=>{
    const deletedCategoryIndex = categories.findIndex(category=> category._id === id);
    console.log(categories[deletedCategoryIndex]);
    const newList = [...categories];
    newList.splice(deletedCategoryIndex,1);
    deleteCategory(id)
    console.log(newList)
    setCategories(newList);
  }

  const onUpdateCategory=async(id,updateCat)=>{
    try {
      console.log(id)
      console.log(updateCat)
      const categoryIndex = categories.findIndex(category => category._id === id);
      const newList = [...categories];
      newList[categoryIndex] = {...newList[categoryIndex], updateCat}
      console.log(newList[categoryIndex])
      await updateCategory(id,updateCat);
      onSuccess();
      console.log('categoria modificado correctamente');
      return setCategories(newList);
    } catch (error) {
      console.log(error)
    }

  }

  return(
    <CategoryContext.Provider 
      value={{
        categoriesData, 
        setCategoriesData,
        modifiedCategory, 
        setModifiedCategory,
        categories, 
        setCategories,
        categoryHandleChange,
        categoryHandleChangeModified,
        onSaveCategory,
        onSubmitCategory,
        onCLeanCategory,
        onCancelCategory,
        onDeleteCategory,
        onUpdateCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}