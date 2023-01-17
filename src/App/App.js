import React from 'react';
import {Route, Routes, HashRouter} from 'react-router-dom';
import { Menu } from '../Menu';
import { Footer } from '../Footer';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { SignUpPage } from '../SignUpPage';
import { LogOutPage } from '../LogOutPage';
import { CategoryPage } from '../Categories/CategoryPage';
import { Entrenadores } from '../Coaches/EntrenadoresPage';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { entrenadoresDefault } from '../entrenadores';
import { categoriesDefault } from '../categoriesDefault';
import { CoachProvider } from '../contexts/coachContext';
import { StateProvider } from '../contexts/statesContext';
import { ModalProvider } from '../contexts/modalContext';


function App() {

  const [categories, setCategories] = React.useState(categoriesDefault);

  return (
    <HashRouter>
      <StateProvider>
        <ModalProvider>          
          <CoachProvider>
            <Menu/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/signup' element={<SignUpPage/>}/>
              <Route path='/logout' element={<LogOutPage/>}/>

              <Route
                path='/categorias'
                element={
                  <CategoryPage
                    categories= {categories}
                    setCategories={setCategories}
                  />
                }
              />

              <Route path='/entrenadores' element={<Entrenadores />}/>

              <Route path='*' element={<p>Not Found</p>}/>
            </Routes>
            <Footer/>
          </CoachProvider>
        </ModalProvider>
      </StateProvider>
    </HashRouter>
  );
}




export default App;
