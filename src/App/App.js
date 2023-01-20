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
import { CoachProvider } from '../contexts/coachContext';
import { StateProvider } from '../contexts/statesContext';
import { ModalProvider } from '../contexts/modalContext';
import { CategoryProvider } from '../contexts/categorycontext';
import { StudentsPage } from '../Students/StudentsPage';
import { StudentProvider } from '../contexts/studentContext';


function App() {

  return (
    <HashRouter>
      <StateProvider>
        <ModalProvider>          
          <CoachProvider>
            <CategoryProvider>
              <StudentProvider>
              <Menu/>
              <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path='/logout' element={<LogOutPage/>}/>
                <Route path='/categorias' element={<CategoryPage/>}/>
                <Route path='/entrenadores' element={<Entrenadores />}/>
                <Route path='/estudiantes' element={<StudentsPage />}/>
                <Route path='*' element={<p>Not Found</p>}/>
              </Routes>
              <Footer/>
              </StudentProvider>
            </CategoryProvider>
          </CoachProvider>
        </ModalProvider>
      </StateProvider>
    </HashRouter>
  );
}




export default App;
