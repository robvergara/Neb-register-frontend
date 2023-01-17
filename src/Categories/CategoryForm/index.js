import React from "react";
// import { entrenadores } from "../../entrenadores";


export function CategoryForm({entrenadores, categories, setCategories, state, onSuccess, onError}){

  const [categoriesData, setCategoriesData] = React.useState(initialCategoryState);

  const handleChange = e =>{
    const {name, value} = e.target;
    setCategoriesData(prevState=>({
      ...prevState,
      [name]:value,
    }))
  }

  const onSave=(newcategory)=>{
    newcategory.id = categories.length + 1; 
    console.log(categoriesData);

    if (categories.find(category => (category.name === newcategory.name && category.gender === newcategory.gender))){
      onError();
      return(console.log('el nombre para la categoria ha sido utilizado'))
    }
    const newList = [...categories];
    newList.push(newcategory);
    onSuccess();
    console.log('categoría guardada correctamente');
    return setCategories(newList);
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    onSave(categoriesData);
  }

  const onCLean = (e)=>{
    e.preventDefault();
    setCategoriesData(initialCategoryState);
  }


  return(

    <>
      {(state.error) && (
          <h5 className="alert alert-danger">
            LA CATEGORIA YA EXISTE
          </h5>
      )}
      {(state.success) && (
          <h5 className="alert alert-success">
            La categoria fue guardada correctamente!
          </h5>
      )}

      <form onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="nombre"
            value={categoriesData.name}
            name = "name"
            onChange={handleChange}
          />
        </div>

        <div className="input-group mb-3">
          <input 
            className="form-control" 
            placeholder="edad"
            value={categoriesData.age}
            name = "age"
            onChange={handleChange}
          />

          <select 
            className="form-select"
            name="gender"
            onChange={handleChange}
          >
            <option defaultValue>Sexo</option>
            {genders.map(gender => (
              <option 
                key={gender}
                value={gender}
              >
                {gender}
              </option>
            ))
            }
          </select>
        </div>
        
        <div className="input-group mb-3">

          <select 
            className="form-select"
            name="coach"
            onChange={handleChange}
          >
            <option 
              defaultValue>
              entrenador(opcional)
            </option>

            {entrenadores.map(entrenador => (
              <option 
                key={entrenador.name}
                value={entrenador.name}
              >
                {entrenador.name}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <button 
            className="btn btn-primary"
            type="submit"
          >guardar</button>

          <button 
            className="btn btn-primary"
            onClick={onCLean}
          >
            limpiar
          </button>
        </div>



      </form>
    </>
  )
}


const genders = [
  'masculino',
  'femenino',
  'mixto'
];

const initialCategoryState = {name:'', age:'',coach:'',  gender:'' }
